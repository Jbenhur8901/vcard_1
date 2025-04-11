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
    address: "Adresse :",
    save: "Enregistrer le contact",
  },
  en: {
    title: "Inspector of Finances, Head of GPEC Office",
    phone: "Phone:",
    email: "Email:",
    address: "Address:",
    save: "Save contact",
  },
};

document.getElementById('languageSelect').addEventListener('change', function () {
  const lang = this.value;
  document.getElementById('titleText').innerText = translations[lang].title;
  document.getElementById('labelPhone').innerText = translations[lang].phone;
  document.getElementById('labelEmail').innerText = translations[lang].email;
  document.getElementById('labelAddress').innerText = translations[lang].address;
  document.getElementById('saveBtn').innerText = translations[lang].save;
});
