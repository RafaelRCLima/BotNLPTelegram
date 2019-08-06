const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }  

  manager.addDocument('pt', 'olá', 'welcome.message');
  manager.addDocument('pt', 'oi', 'welcome.message');
  manager.addDocument('pt', 'Saudações', 'welcome.message');

  manager.addDocument('pt', 'Como vai você?', 'welcome.answer');
  
  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');

  manager.addAnswer('pt', 'welcome.message', "Olá, seja bem vindo");
  manager.addAnswer('pt', 'welcome.message', "Olá, como posso ajudar?");
  
  manager.save('./model.nlp');
};
