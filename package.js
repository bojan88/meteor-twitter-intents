Package.describe({
  summary: "Twitter Intents"
});

Package.on_use(function (api) {
  api.add_files("./lib/intents.js", "client");
});
