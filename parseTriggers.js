process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

var json_file_name = (process.argv.length > 2) ? process.argv[2] : 'triggers_file.json';
var trigger_name = (process.argv.length > 3) ? process.argv[3] : 'push-to-master';
var trigger_id_file = (process.argv.length > 4) ? process.argv[4] : 'trigger_id_file';
var trigger_template_json_file_name = (process.argv.length > 5) ? process.argv[5] : 'trigger_template.json';

var fs = require('fs');
var triggers = JSON.parse(fs.readFileSync(json_file_name, 'utf8'));

const trigger_found = triggers.triggers.filter(x => x.description === trigger_name);

if (trigger_found && trigger_found.length > 0) {
  console.log(JSON.stringify(trigger_found[0]));
  fs.writeFileSync(trigger_template_json_file_name, JSON.stringify(trigger_found[0].triggerTemplate));
  fs.writeFileSync(trigger_id_file, trigger_found[0].id);
} else {
  process.exit(-1);
}
