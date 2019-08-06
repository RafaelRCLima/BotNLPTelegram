const fs = require('fs');

module.exports = async function trainnlp(manager, say) {
  if (fs.existsSync('./model.nlp')) {
    manager.load('./model.nlp');
    return;
  }  

  manager.addDocument('pt', 'olá', 'welcome.message');
  manager.addDocument('pt', 'oi', 'welcome.message');
  manager.addDocument('pt', 'Saudações', 'welcome.message');

  manager.addDocument('pt', 'Qual é a grade de ADS?', 'grade.ADS');
  manager.addDocument('pt', 'grade de ADS', 'grade.ADS');
  manager.addDocument('pt', 'grade ADS', 'grade.ADS');
  manager.addDocument('pt', 'grade do curso de ADS', 'grade.ADS');
  manager.addDocument('pt', 'grade do curso de Análise e Desenvolvimento de Sistemas', 'grade.ADS');

  manager.addDocument('pt', 'Qual é a grade do primeiro semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.1sem');
  manager.addDocument('pt', 'Me mostre a grade do primeiro semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.1sem');
  manager.addDocument('pt', 'Grade do primeiro semestre de Análise e Desenvolvimento de Sistemas', 'grade.ADS.1sem');
  manager.addDocument('pt', 'Qual é a grade do primeiro semestre de ADS?', 'grade.ADS.1sem');
  manager.addDocument('pt', 'Me mostre a grade do primeiro semestre de ADS?', 'grade.ADS.1sem');
  manager.addDocument('pt', 'Grade do primeiro semestre de ADS', 'grade.ADS.1sem');

  manager.addDocument('pt', 'Qual é a grade do segundo semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.2sem');
  manager.addDocument('pt', 'Me mostre a grade do segundo semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.2sem');
  manager.addDocument('pt', 'Grade do segundo semestre de Análise e Desenvolvimento de Sistemas', 'grade.ADS.2sem');
  manager.addDocument('pt', 'Qual é a grade do segundo semestre de ADS?', 'grade.ADS.2sem');
  manager.addDocument('pt', 'Me mostre a grade do segundo semestre de ADS?', 'grade.ADS.2sem');
  manager.addDocument('pt', 'Grade do segundo semestre de ADS', 'grade.ADS.2sem');

  manager.addDocument('pt', 'Qual é a grade do terceiro semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.3sem');
  manager.addDocument('pt', 'Me mostre a grade do terceiro semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.3sem');
  manager.addDocument('pt', 'Grade do terceiro semestre de Análise e Desenvolvimento de Sistemas', 'grade.ADS.3sem');
  manager.addDocument('pt', 'Qual é a grade do terceiro semestre de ADS?', 'grade.ADS.3sem');
  manager.addDocument('pt', 'Me mostre a grade do terceiro semestre de ADS?', 'grade.ADS.3sem');
  manager.addDocument('pt', 'Grade do terceiro semestre de ADS', 'grade.ADS.3sem');

  manager.addDocument('pt', 'Qual é a grade do quarto semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.4sem');
  manager.addDocument('pt', 'Me mostre a grade do quarto semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.4sem');
  manager.addDocument('pt', 'Grade do quarto semestre de Análise e Desenvolvimento de Sistemas', 'grade.ADS.4sem');
  manager.addDocument('pt', 'Qual é a grade do quarto semestre de ADS?', 'grade.ADS.4sem');
  manager.addDocument('pt', 'Me mostre a grade do quarto semestre de ADS?', 'grade.ADS.4sem');
  manager.addDocument('pt', 'Grade do quarto semestre de ADS', 'grade.ADS.4sem');

  manager.addDocument('pt', 'Qual é a grade do quinto semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.5sem');
  manager.addDocument('pt', 'Me mostre a grade do quinto semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.5sem');
  manager.addDocument('pt', 'Grade do quinto semestre de Análise e Desenvolvimento de Sistemas', 'grade.ADS.5sem');
  manager.addDocument('pt', 'Qual é a grade do quinto semestre de ADS?', 'grade.ADS.5sem');
  manager.addDocument('pt', 'Me mostre a grade do quinto semestre de ADS?', 'grade.ADS.5sem');
  manager.addDocument('pt', 'Grade do quinto semestre de ADS', 'grade.ADS.5sem');

  manager.addDocument('pt', 'Qual é a grade do sexto semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.6sem');
  manager.addDocument('pt', 'Me mostre a grade do texto semestre de Análise e Desenvolvimento de Sistemas?', 'grade.ADS.6sem');
  manager.addDocument('pt', 'Grade do sexto semestre de Análise e Desenvolvimento de Sistemas', 'grade.ADS.6sem');
  manager.addDocument('pt', 'Qual é a grade do sexto semestre de ADS?', 'grade.ADS.6sem');
  manager.addDocument('pt', 'Me mostre a grade do texto semestre de ADS?', 'grade.ADS.6sem');
  manager.addDocument('pt', 'Grade do sexto semestre de ADS', 'grade.ADS.6sem');

  manager.addDocument('pt', 'Qual é o horário das aulas de Análise e Desenvolvimento de Sistemas da Turma A?', 'horario.ADS');
  manager.addDocument('pt', 'Qual é o horário das aulas de ADS da turma A?', 'horario.ADS');
  manager.addDocument('pt', 'Qual é o horário de Análise e Desenvolvimento de Sistemas da Turma A?', 'horario.ADS');
  manager.addDocument('pt', 'Qual é o horário de ADS da turma A?', 'horario.ADS');
  manager.addDocument('pt', 'horário das aulas de Análise e Desenvolvimento de Sistemas turma A?', 'horario.ADS');
  manager.addDocument('pt', 'horário das aulas de ADS turma A?', 'horario.ADS');
  manager.addDocument('pt', 'horário ADS turma A?', 'horario.ADS');
  manager.addDocument('pt', 'ADS A?', 'horario.ADS');
  manager.addDocument('pt', 'ADS turma A?', 'horario.ADS');

  manager.addDocument('pt', 'Qual é o telefone da FATEC?', 'contato.telefone');
  manager.addDocument('pt', 'Qual é o telefone para contato?', 'contato.telefone');
  manager.addDocument('pt', 'Telefone para contato', 'contato.telefone');
  manager.addDocument('pt', 'Telefone FATEC?', 'contato.telefone');
  manager.addDocument('pt', 'Telefone da fatec?', 'contato.telefone');

  manager.addDocument('pt', 'Qual é o email da FATEC?', 'contato.email');
  manager.addDocument('pt', 'email da FATEC?', 'contato.email');
  manager.addDocument('pt', 'Qual é o email para contato?', 'contato.email');
  manager.addDocument('pt', 'email FATEC', 'contato.email');
  manager.addDocument('pt', 'email para FATEC', 'contato.email');
  manager.addDocument('pt', 'Qual é o e-mail da FATEC?', 'contato.email');
  manager.addDocument('pt', 'e-mail da FATEC?', 'contato.email');
  manager.addDocument('pt', 'Qual é o e-mail para contato?', 'contato.email');
  manager.addDocument('pt', 'e-mail FATEC', 'contato.email');
  manager.addDocument('pt', 'e-mail para FATEC', 'contato.email');

  manager.addDocument('pt','Site da fatec', 'contato.site');
  manager.addDocument('pt','website da fatec', 'contato.site');
  manager.addDocument('pt','Site fatec', 'contato.site');
  manager.addDocument('pt','Qual é o site da fatec?', 'contato.site');

  manager.addDocument('pt','Horários de ônibus', 'horario.onibus');
  manager.addDocument('pt','Horários para chegar na FATEC', 'horario.onibus');
  manager.addDocument('pt','ônibus para a FATEC', 'horario.onibus');
  manager.addDocument('pt','como chego de ônibus', 'horario.onibus');

  manager.addDocument('pt','Calendário', 'calendario.oficial');
  manager.addDocument('pt','Feriado', 'calendario.oficial');
  manager.addDocument('pt','Quais são os feriados oficiais?', 'calendario.oficial');
  manager.addDocument('pt','Semana de prova', 'calendario.oficial');
  manager.addDocument('pt','Calendário oficial', 'calendario.oficial');
  manager.addDocument('pt','qual é o calendário oficial', 'calendario.oficial');

  manager.addDocument('pt','horário de funcionamento da biblioteca', 'horario.biblioteca');
  manager.addDocument('pt','qual é o horário de funcionamento da biblioteca?', 'horario.biblioteca');
  manager.addDocument('pt','horário biblioteca', 'horario.biblioteca');
  manager.addDocument('pt','que horas a biblioteca abre?', 'horario.biblioteca');

  manager.addDocument('pt','horário de funcionamento da secretaria', 'horario.secretaria');
  manager.addDocument('pt','qual é o horário de funcionamento da secretaria?', 'horario.secretaria');
  manager.addDocument('pt','horário secretaria', 'horario.secretaria');
  manager.addDocument('pt','que horas a secretaria abre?', 'horario.secretaria');

  manager.addDocument('pt','acesso moodle', 'acesso.moodle');
  manager.addDocument('pt','link moodle', 'acesso.moodle');
  manager.addDocument('pt','link do moodle', 'acesso.moodle');
  manager.addDocument('pt','site moodle', 'acesso.moodle');
  manager.addDocument('pt','link para acesso moodle', 'acesso.moodle');

  manager.addDocument('pt','email institucional', 'email.institucional');
  manager.addDocument('pt','email dos alunos', 'email.institucional');
  manager.addDocument('pt','e-mail institucional', 'email.institucional');
  manager.addDocument('pt','e-mail dos alunos', 'email.institucional');
  manager.addDocument('pt','link para e-mail dos alunos', 'email.institucional');
  manager.addDocument('pt','link para email dos alunos', 'email.institucional');

  manager.addDocument('pt','funções disponíveis', 'funcionalidades.bot');
  manager.addDocument('pt','funções bot', 'funcionalidades.bot');
  manager.addDocument('pt','funções do bot', 'funcionalidades.bot');

  manager.addDocument('pt','O que esse bot faz?', 'funcionalidades.bot');

  
  say('Training, please wait..');
  const hrstart = process.hrtime();
  await manager.train();
  const hrend = process.hrtime(hrstart);
  console.info('Trained (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  say('Trained!');
  
  manager.addAnswer('pt', 'welcome.message', "Olá, seja bem vindo, como posso ajudar?");
  manager.addAnswer('pt', 'welcome.message', "Olá, como posso ajudar?");

  manager.addAnswer('pt', 'grade.ADS', "Grade de Análise e Desenvolvimento de Sistemas:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");

  manager.addAnswer('pt', 'grade.ADS.1sem', "Matérias do primeiro semestre de Análise e Desenvolvimento de Sistemas \n\nProgramação em Microinformática \nAlgoritmos e Lógica de Programação \nLaboratório de Hardware \nArquitetura e Organização de Computadores \nAdministração Geral \nMatemática Discreta \nInglês I\n\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");
  manager.addAnswer('pt', 'grade.ADS.2sem', "Matérias do segundo semestre de Análise e Desenvolvimento de Sistemas \n\nEngenharia de Software I \nLinguagem de Programação \nSistemas de Informação \nContabilídade \nCálculo \nComunicação e Expressão \nInglês II\n\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");
  manager.addAnswer('pt', 'grade.ADS.3sem', "Matérias do terceiro semestre de Análise e Desenvolvimento de Sistemas \n\nEngenharia de Software II \nEstrutura de Dados \nInteração Humano Computador \nSistemas Operacionais I \nEconomia e Finanças \nEstatística e Finanças \nEstatística Aplicada \nSociedade e Tecnologia \nInglês III\n\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");
  manager.addAnswer('pt', 'grade.ADS.4sem', "Matérias do quarto semestre de Análise e Desenvolvimento de Sistemas \n\nEngenharia de Software III \nProgramação Orientada a Objetos \nBanco de Dados \nSistemas Operacionais I \nSistemas Operacionais II \nEletiva I \nMetodologia da Pesquisa Cientifíco - Tecnológica \nInglês IV\n\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");
  manager.addAnswer('pt', 'grade.ADS.5sem', "Matérias do quinto semestre de Análise e Desenvolvimento de Sistemas \n\nLaboratório de Engenharia de Software \nSegurança da Informação \nEscolha I \nRedes de Computadores \nEletiva II \nProgramação Linear e Aplicações \nInglês V\n\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");
  manager.addAnswer('pt', 'grade.ADS.6sem', "Matérias do sexto semestre de Análise e Desenvolvimento de Sistemas \n\nGestão de Projetos \nGestão e Governança e Tecnologia da Informação \nEscolha II \nEscolha III \nGestão de Equipes \nEmpreendedorismo \nÉtica e Responsabilidade Profissional \nInglês VI\n\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/cursos/2016/2016.11.16_matriz_ads.pdf");

  manager.addAnswer('pt','horario.ADS',"Horário das aulas de ADS\nLink:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/horarios/2019-2/2019-2_ads_manha.pdf");
  
  manager.addAnswer('pt','contato.telefone',"Telefone para contato:\n+55(12)3905-2423\n+55(12)3905-4979\n+55(12)3905-4699");

  manager.addAnswer('pt','contato.email',"Para enviar um email para a FATEC entre em:\nhttps://fatecsjc-prd.azurewebsites.net/contato.php");

  manager.addAnswer('pt','contato.site',"Site oficial da Fatec São José dos Campos:\nhttps://fatecsjc-prd.azurewebsites.net/index.php");

  manager.addAnswer('pt','horario.onibus',"Horário de ônibus para chegar na FATEC SJC:\nhttps://fatecsjc-prd.azurewebsites.net/downloads/arquivos/2015-2/2015.08.10_linha200_onibus_sjc.pdf");

  manager.addAnswer('pt','calendario.oficial',"Calendário oficial:\nhttps://calendar.google.com/calendar/r?cid=unrbf7j3j4fjtvdjjmmb7ltdjs@group.calendar.google.com");

  manager.addAnswer('pt','horario.biblioteca',"Horário de funcionamento da biblioteca:\nDe segunda a sexta-feira das 08h00 às 12h00 e das 14h00 às 22h00\nhttps://fatecsjc-prd.azurewebsites.net/biblioteca.php");
  
  manager.addAnswer('pt','horario.secretaria',"Horário de funcionamento da secretaria:\nSegunda a Sexta-feira\nManhã	08h00 às 12h30\nTarde	13h30 às 17h00\nhttps://fatecsjc-prd.azurewebsites.net/secretaria.php");

  manager.addAnswer('pt','acesso.moodle',"Link para acesso ao Moodle: http://fatecsjc-prd.azurewebsites.net/moodle/");

  manager.addAnswer('pt','email.institucional',"Link para acesso ao E-mail institucional: https://outlook.office365.com/mail/inbox");

  manager.addAnswer('pt','funcionalidades.bot',"Funcionalidades disponíveis:\nGrade dos cursos por semestre\nHorário das aulas por semestre\nTelefone para contato\nCalendário acadêmico\nHorário de funcionamento da biblioteca\nHorário de funcionamento da secretaria\nSite oficial\nHorário de ônibus\nEmail institucional\nLink do Moodle");

  manager.save('./model.nlp');
};
