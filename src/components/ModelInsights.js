// src/components/ModelInsights.js
// Renders unique, model-specific editorial content to differentiate pages for AdSense.
// Usage: <ModelInsights makeSlug="ford" modelSlug="focus" />
// Or on category pages: <ModelInsights makeSlug="ford" modelSlug="focus" categorySlug="brake-pads" />

import Link from 'next/link';
import { MODEL_CONTENT, CATEGORY_CONTENT } from '@/lib/model-content';

export function ModelInsights({ makeSlug, modelSlug, categorySlug }) {
  const key = `${makeSlug}-${modelSlug}`;
  const content = MODEL_CONTENT[key];
  const catContent = categorySlug ? CATEGORY_CONTENT[categorySlug] : null;
  
  const makeName = (makeSlug || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const modelName = (modelSlug || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const fullName = `${makeName} ${modelName}`;

  // If on a category page, show category expert content + relevant model issues
  if (categorySlug && catContent) {
    const relevantIssues = content?.commonIssues?.filter(
      issue => issue.categories.includes(categorySlug)
    ) || [];

    return (
      <div className="mt-10 space-y-8">
        {/* Category expert content */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            {catContent.whatTheyDo ? `About ${getCatName(categorySlug)}` : `${fullName} — Expert Guide`}
          </h2>
          
          {catContent.whatTheyDo && (
            <div className="mb-5">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">What do they do?</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{catContent.whatTheyDo}</p>
            </div>
          )}
          
          {catContent.whenToReplace && (
            <div className="mb-5">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">When to replace</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{catContent.whenToReplace}</p>
            </div>
          )}

          {catContent.brandGuide && (
            <div className="mb-5">
              <h3 className="font-semibold text-gray-800 text-sm mb-2">Brand guide</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{catContent.brandGuide}</p>
            </div>
          )}

          {catContent.topTip && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                <strong>💡 Top tip:</strong> {catContent.topTip}
              </p>
            </div>
          )}
        </div>

        {/* Model-specific issues relevant to this category */}
        {relevantIssues.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-3">
              ⚠️ Known {fullName} Issues
            </h3>
            <div className="space-y-3">
              {relevantIssues.map((issue, i) => (
                <div key={i}>
                  <p className="font-medium text-gray-800 text-sm">{issue.issue}</p>
                  <p className="text-gray-600 text-sm mt-1">{issue.detail}</p>
                </div>
              ))}
            </div>
            {content?.partsTip && (
              <p className="text-sm text-amber-800 mt-4 pt-3 border-t border-amber-200">
                <strong>Parts tip:</strong> {content.partsTip}
              </p>
            )}
          </div>
        )}

        {/* If no model content but we have category content, still show a useful SEO paragraph */}
        {!content && (
          <div className="prose prose-gray max-w-none">
            <h2 className="text-xl font-bold text-gray-900">{fullName} {getCatName(categorySlug)} — Price Comparison</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Looking for {getCatName(categorySlug).toLowerCase()} for your {fullName}? CarPartsCompare shows you prices from Amazon, eBay and
              specialist UK retailers side by side, so you can find the best deal without visiting multiple websites.
              We list parts from premium brands through to budget options, all compatible with the {fullName}.
              For the most accurate results matched to your exact engine and year, enter your registration plate above —
              we use DVLA data and the TecDoc parts catalogue to guarantee fitment.
            </p>
          </div>
        )}
      </div>
    );
  }

  // On model page (no categorySlug) — show full model insights
  if (!content) {
    return (
      <div className="mt-10 prose prose-gray max-w-none">
        <h2 className="text-xl font-bold text-gray-900">About {fullName} Parts</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          The {fullName} is one of the UK's popular vehicles. CarPartsCompare helps you find the right replacement parts at the
          best prices. We compare prices across Amazon, eBay and specialist UK retailers, covering everything from routine service
          parts like oil filters and air filters through to brakes, suspension, electrical components and more.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          Different {fullName} variants use different parts depending on engine size, fuel type and production year. 
          For guaranteed compatible parts matched to your exact vehicle, enter your registration plate — we use DVLA data 
          and the TecDoc parts catalogue to identify the correct components for your car.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 space-y-8">
      {/* Model overview */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">About {fullName} Parts</h2>
        <p className="text-sm text-gray-500 mb-4">{content.yearRange}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{content.intro}</p>
        
        {content.partsTip && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>💡 Parts buying tip:</strong> {content.partsTip}
            </p>
          </div>
        )}
      </div>

      {/* Common issues */}
      {content.commonIssues && content.commonIssues.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">⚠️ Common {fullName} Issues & What Parts You'll Need</h2>
          <div className="space-y-4">
            {content.commonIssues.map((issue, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{issue.issue}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{issue.detail}</p>
                {issue.categories.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {issue.categories.map(catSlug => (
                      <Link
                        key={catSlug}
                        href={`/car-parts/${makeSlug}/${modelSlug}/${catSlug}`}
                        className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-100 transition"
                      >
                        Shop {getCatName(catSlug)} →
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Service intervals */}
      {content.serviceIntervals && (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">🔧 {fullName} Service Intervals</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {Object.entries(content.serviceIntervals).map(([key, value]) => (
              <div key={key} className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-500 font-medium">{formatIntervalLabel(key)}</p>
                <p className="text-sm text-gray-800 font-medium mt-0.5">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick facts */}
      {content.quickFacts && content.quickFacts.length > 0 && (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">📋 {fullName} Quick Facts</h2>
          <div className="space-y-2">
            {content.quickFacts.map((fact, i) => (
              <p key={i} className="text-sm text-gray-700 flex gap-2">
                <span className="text-gray-400 flex-shrink-0">•</span>
                <span>{fact}</span>
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Helper: convert category slug to display name
function getCatName(slug) {
  const names = {
    'brake-pads': 'Brake Pads', 'brake-discs': 'Brake Discs', 'brake-drums': 'Brake Drums',
    'brake-shoes': 'Brake Shoes', 'brake-hoses': 'Brake Hoses', 'brake-calipers': 'Brake Calipers',
    'oil-filters': 'Oil Filters', 'air-filters': 'Air Filters', 'fuel-filters': 'Fuel Filters',
    'cabin-filters': 'Cabin Filters', 'spark-plugs': 'Spark Plugs', 'glow-plugs': 'Glow Plugs',
    'wiper-blades': 'Wiper Blades', 'batteries': 'Batteries', 'alternators': 'Alternators',
    'starter-motors': 'Starter Motors', 'bulbs': 'Bulbs & Lighting', 'sensors': 'Sensors',
    'ignition-coils': 'Ignition Coils', 'timing-belts': 'Timing Belt Kits', 'drive-belts': 'Drive Belts',
    'gaskets-seals': 'Gaskets & Seals', 'engine-mounts': 'Engine Mounts', 'turbo-parts': 'Turbo Parts',
    'shock-absorbers': 'Shock Absorbers', 'coil-springs': 'Coil Springs',
    'suspension-arms': 'Suspension Arms', 'tie-rod-ends': 'Tie Rod Ends',
    'wheel-bearings': 'Wheel Bearings', 'anti-roll-bar-links': 'Anti-Roll Bar Links',
    'clutch-kits': 'Clutch Kits', 'flywheels': 'Flywheels', 'cv-joints': 'CV Joints & Boots',
    'gearbox-mounts': 'Gearbox Mounts', 'water-pumps': 'Water Pumps',
    'thermostats': 'Thermostats', 'radiators': 'Radiators', 'heater-parts': 'Heater Parts',
    'cooling-fans': 'Cooling Fans', 'exhaust-parts': 'Exhaust Parts',
    'wing-mirrors': 'Wing Mirrors', 'headlights': 'Headlights',
  };
  return names[slug] || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Helper: format service interval key to readable label
function formatIntervalLabel(key) {
  const labels = {
    oilChange: 'Oil Change',
    airFilter: 'Air Filter',
    sparkPlugs: 'Spark Plugs',
    brakeFluid: 'Brake Fluid',
    coolant: 'Coolant',
    timingBelt: 'Timing Belt',
    timingChain: 'Timing Chain',
  };
  return labels[key] || key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
}

export default ModelInsights;
