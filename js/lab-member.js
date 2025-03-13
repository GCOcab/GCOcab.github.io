

// js/lab-member.js
class LabMember extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const place = this.getAttribute('place');
    const email = this.getAttribute('email');
    const image = this.getAttribute('image');
    const subject = this.getAttribute('subject');


    let imageHTML = '';

    // Use the global baseUrl variable injected in HTML
    if (image && image !== 'None') {
      // Ensure the image path is correct relative to the base URL
      imageHTML = `<img src="/GCO/images/members/${image}" alt="Member ${name}">`;
    }

    let emailHTML = '';
    if (email && email !== 'None') {
      emailHTML = `<div class="box email-box">Correo electrónico: <a href="mailto:${email}">${email}</a></div>`;
    }

    let subjectHTML = '';
    if (subject && subject !== 'None') {
      subjectHTML = `<div class="box subject-box">${subject}</div>`;
    }

    this.innerHTML = `
      <li class="lab-member">
        ${imageHTML}
        <div class="text-content">
          <h4 class="box name-box">${name}</h4>
          <h5 class="box place-box">${place}</h5>
          ${emailHTML}
          ${subjectHTML}
        </div>
      </li>
    `;
  }
}

customElements.define('lab-member', LabMember);
