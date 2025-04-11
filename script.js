function downloadVCF() {
    const vcardData = `BEGIN:VCARD
  VERSION:3.0
  N:Morlende;Guil Alex;;;
  FN:Morlende Guil Alex
  ORG:Nodes Technology
  TITLE:Inspecteur des finances
  TEL:+242068526833
  EMAIL:morlende158@gmail.com
  URL:https://www.instagram.com/alex_morlende_1er?igsh=M2NlaTk5YmptYnl6&utm_source=qr
  ADR:;;Makanbadilou (VSD);;Djiri,Brazzaville;;Congo
  END:VCARD`;
    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'jacques-benhur.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  document.getElementById('upload').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('profileImage').src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
  
  const translations = {
    fr: {
      title: "Inspecteur des finances, Chef de bureau GPEC",
      phone: "Téléphone :",
      email: "Email :",
      website: "Site Web :",
      address: "Adresse :",
      save: "Enregistrer le contact",
    },
    en: {
      title: "Inspector of Finances, Head of GPEC Office",
      phone: "Phone:",
      email: "Email:",
      website: "Website:",
      address: "Address:",
      save: "Save contact",
    },
  };
  
  document.getElementById('languageSelect').addEventListener('change', function () {
    const lang = this.value;
    document.getElementById('titleText').innerText = translations[lang].title;
    document.getElementById('labelPhone').innerText = translations[lang].phone;
    document.getElementById('labelEmail').innerText = translations[lang].email;
    document.getElementById('labelWebsite').innerText = translations[lang].website;
    document.getElementById('labelAddress').innerText = translations[lang].address;
    document.getElementById('saveBtn').innerText = translations[lang].save;
  });
  