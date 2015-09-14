Package.describe({
  name: 'amalthean:orion-lang-mk',
  version: '1.3.0',
  summary: 'Orion Macedonian language support',
  git: 'https://github.com/Amalthean',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('orionjs:lang-en@1.4.0');
  api.imply('orionjs:lang-en');
  api.addFiles('mk.js');
});