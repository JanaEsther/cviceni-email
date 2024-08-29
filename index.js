const goodbye = (name) => {
  const closingElement = document.querySelector('.email__closing');
  closingElement.textContent = `S pozdravem ${name} `;
};

goodbye('Jana Obendraufová');

const fillSubject = (subject) => {
  const emailElement = document.querySelector('.email__subject');
  emailElement.textContent = `${subject}`;
};

const fillBody = (body) => {
  const bodyElement = document.querySelector('.email__body');
  bodyElement.textContent = `${body}`;
};

fillSubject('Pracovní nabídka');
fillBody(
  'reaguji na Vaši nabídku, s tím, že opravdu není o co stát. Pokud někdo přesto projeví zájem, tak se na něj přijdu osobně podívat.Takového troubu aby pohledal.',
);
