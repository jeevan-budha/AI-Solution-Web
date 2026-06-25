const services = [

{
title:"AI-Powered Virtual Assistant",
description:"Intelligent virtual assistant that responds in real time."
},

{
title:"Rapid Prototyping Solutions",
description:"Accelerate product development and reduce time-to-market."
},

{
title:"Digital Experience Monitoring",
description:"Monitor employee experience proactively."
},

{
title:"Innovation Acceleration",
description:"Speed up design, engineering and innovation."
}

];

const testimonials = [

{
name:"Sarah Mitchell",
feedback:"Reduced support tickets by 60%."
},

{
name:"James Richardson",
feedback:"Saved months of development time."
},

{
name:"Emily Chen",
feedback:"Outstanding support and technology."
}

];

let servicesHTML = "";

services.forEach(service => {

servicesHTML += `

<div class="col-md-6 col-lg-3 mb-4">

<div class="card h-100 shadow-sm">

<div class="card-body">

<h5>${service.title}</h5>

<p>${service.description}</p>

</div>

</div>

</div>

`;

});

document.getElementById(
"servicesContainer"
).innerHTML = servicesHTML;

let testimonialHTML = "";

testimonials.forEach(item => {

testimonialHTML += `

<div class="col-md-4 mb-4">

<div class="card h-100">

<div class="card-body">

<p>"${item.feedback}"</p>

<hr>

<strong>${item.name}</strong>

</div>

</div>

</div>

`;

});

document.getElementById(
"testimonialContainer"
).innerHTML = testimonialHTML;