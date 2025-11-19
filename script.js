document.addEventListener('DOMContentLoaded', function () {
  const companyName = document.getElementById('company_name');
  const positionInput = document.getElementById('position');
  const locationInput = document.getElementById('location');
  const dateAppliedInput = document.getElementById('date_applied');
  const statusInput = document.getElementById('status');

  let totalApplications = 0;
  let interviewCount = 0;
  let offersCount = 0;
  let rejectionsCount = 0;

  const submitBtn = document.getElementsByClassName('submit_button')[0];

  if (!submitBtn) return;

  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();

    // defensive: ensure inputs exist
    if (!companyName || !positionInput || !locationInput || !dateAppliedInput || !statusInput) {
      console.warn('One or more form fields are missing');
      return;
    }

    // trim and validate (don't add empty cards)
    const company = companyName.value.trim();
    const position = positionInput.value.trim();
    const location = locationInput.value.trim();
    const dateApplied = dateAppliedInput.value.trim();
    const status = statusInput.value.trim();

    if (!company) {
      // require at least company name (change or extend validation as needed)
      companyName.focus();
      return;
    }

    // increment totals
    totalApplications += 1;
    if (status === "Interviewing") interviewCount += 1;
    else if (status === "Offered") offersCount += 1;
    else if (status === "Rejected") rejectionsCount += 1;

    // update UI counters
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = String(value);
    };
    setText('total_applications', totalApplications);
    setText('total_applied', totalApplications);
    setText('total_interviews', interviewCount);
    setText('total_offers', offersCount);
    setText('total_rejected', rejectionsCount);

    // create and append card safely (no innerHTML with user values)
    addJobApplicationSafe(company, position, location, dateApplied, status);

    // clear form / reset focus
    companyName.value = '';
    positionInput.value = '';
    locationInput.value = '';
    dateAppliedInput.value = '';
    statusInput.value = ''; // or set to a default like 'Applied'
    companyName.focus();
  });
});


function addJobApplicationSafe(company, position, location, dateApplied, status) {
  const jobList = document.querySelector('.job_list');
  if (!jobList) return;

  // card root
  const newCard = document.createElement('div');
  newCard.className = 'cards';

  // container & content wrappers (match your HTML/CSS)
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card_container';

  const cardContent = document.createElement('div');
  cardContent.className = 'card_content';

  // company heading
  const h3 = document.createElement('h3');
  h3.className = 'card_company';
  h3.textContent = 'Company Name ';

  const companySpan = document.createElement('span');
  companySpan.className = 'card-company-value';
  companySpan.textContent = company;
  h3.appendChild(companySpan);

  // position
  const pPosition = document.createElement('p');
  pPosition.className = 'card_position';
  pPosition.textContent = 'Position ';
  const posSpan = document.createElement('span');
  posSpan.className = 'card-position-value';
  posSpan.textContent = position;
  pPosition.appendChild(posSpan);

  // location
  const pLocation = document.createElement('p');
  pLocation.className = 'card_location';
  pLocation.textContent = 'Location ';
  const locSpan = document.createElement('span');
  locSpan.className = 'card-location-value';
  locSpan.textContent = location;
  pLocation.appendChild(locSpan);

  // date
  const pDate = document.createElement('p');
  pDate.className = 'card_date';
  pDate.textContent = 'Date Applied: ';
  const dateSpan = document.createElement('span');
  dateSpan.className = 'card-date-value';
  dateSpan.textContent = dateApplied;
  pDate.appendChild(dateSpan);

  // status
  const pStatus = document.createElement('p');
  pStatus.className = 'card_status';
  pStatus.textContent = 'Status: ';
  const statusSpan = document.createElement('span');
  statusSpan.className = 'card-status-value';
  statusSpan.textContent = status;
  pStatus.appendChild(statusSpan);

  // assemble
  cardContent.appendChild(h3);
  cardContent.appendChild(pPosition);
  cardContent.appendChild(pLocation);
  cardContent.appendChild(pDate);
  cardContent.appendChild(pStatus);

  cardContainer.appendChild(cardContent);
  newCard.appendChild(cardContainer);

  jobList.appendChild(newCard);
}
