import { createHash } from 'crypto';
import { NextResponse } from 'next/server';

// eBay Marketplace Account Deletion/Closure Notification Endpoint
// Required by eBay to enable Production API keys
// Docs: https://developer.ebay.com/develop/guides-v2/marketplace-user-account-deletion

// You'll set this same token in the eBay developer dashboard
const VERIFICATION_TOKEN = process.env.EBAY_DELETION_VERIFICATION_TOKEN || 'CarPartsCompare_eBay_Verification_2025_uk';
const ENDPOINT_URL = 'https://carpartscompare.uk/api/ebay/account-deletion';

// GET - Handle eBay's challenge verification
// eBay sends: GET /api/ebay/account-deletion?challenge_code=xxx
// We must respond with SHA-256 hash of (challengeCode + verificationToken + endpoint)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const challengeCode = searchParams.get('challenge_code');

  if (!challengeCode) {
    return NextResponse.json(
      { error: 'Missing challenge_code parameter' },
      { status: 400 }
    );
  }

  // Hash: challengeCode + verificationToken + endpoint (in this exact order)
  const hash = createHash('sha256');
  hash.update(challengeCode);
  hash.update(VERIFICATION_TOKEN);
  hash.update(ENDPOINT_URL);
  const challengeResponse = hash.digest('hex');

  return NextResponse.json(
    { challengeResponse },
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

// POST - Receive account deletion notifications
// eBay sends user deletion notifications here
// We don't store any eBay user data (Browse API only), so we just acknowledge
export async function POST(request) {
  try {
    const body = await request.json();

    // Log for debugging (optional - remove in production if you prefer)
    console.log('eBay account deletion notification received:', {
      notificationId: body?.notification?.notificationId,
      eventDate: body?.notification?.eventDate,
      topic: body?.metadata?.topic,
    });

    // Acknowledge receipt - we don't store eBay user data so no action needed
    return NextResponse.json(
      { status: 'acknowledged' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing eBay deletion notification:', error);
    // Still return 200 to prevent eBay from retrying
    return NextResponse.json(
      { status: 'acknowledged' },
      { status: 200 }
    );
  }
}
