// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

//function main() {
  //return 'Hello, World!';
  // bio section
var bio ={
    "name": "Dheeraja",
    "role": "Software",
    "contacts": {
        "mobile": "9962595918",
        "email": "dheeraja93@gmail.com",
        "github": "dheeraja123",
        "location": "chennai"
    },

    "welcomeMessage": "lorem ispum dollar sit etc etcc etc",
    "biopic": "fry.jpg",
    "skills": ["Solaris", "Linux", "Perl", "Python"]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").append(formattedMobile, formattedEmail, formattedgithub, formattedLocation);
	 $("#footerContacts").append(formattedMobile, formattedEmail, formattedgithub, formattedLocation);
	

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(formattedMessage);
    $("#header").append(formattedBiopic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (skill = 0; skill < bio.skills.length; skill++) {
            if (bio.skills.hasOwnProperty(skill)) {
                formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }

};
bio.display();

//work section 
var work = {
    "jobs": [{
        "employer": "planet Express",
        "title": "delivery boy",
        "location": "chennai",
        "dates": "january 2003-Future",
        "description": "Soybeans are grown around the world under many different climatic conditions and have been grown for many detect and classify diseases is very expensive."
    }, {
        "employer": "pinchu's pizza",
        "title": "delivery boy",
        "location": "chennai",
        "dates": "march 30000-present",
        "description": "Septoria brown spot is a fungal disease that normally does not cause major yield losses."
    }]
};

work.display = function() {

    for (job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

work.display();

// project section
var projects = {
    "projects": [{
        "title": "sampleproject1",
        "dates": "2014",
        "description": "this a project bsaed on data mining applications.",
        "images": ["1.jpg", "fry.jpg"]
    }]
};

projects.display = function() {
    for (project = 0; project < projects.projects.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
         
    for(image=0;image<projects.projects[project].images.length;image++)			   {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
};

projects.display();

//education section			

var education = {
    "schools": [{
        "name": "vidhyodaya school",
        "location": "chennai",
        "degree": "mastres",
        "majors": ["CS"],
        "dates": "2013",
        "url": "https://www.edu.com"


    }, {
        "name": "Andhra school",
        "location": "Banglore",
        "degree": "B.tech",
        "majors": ["IT"],
        "dates": "2010",
        "url": "https://www.edu.com"
    }],
    "onlineCourses": [{
        "title": "javascript crash course",
        "school": "udacity",
        "dates": "2014",
        "url": "https://wwww.udacity.com"
    }]
};

education.display = function() {


    for (educations = 0; educations < education.schools.length; educations++) {

        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[educations].name);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[educations].degree);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[educations].location);

        var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[educations].majors);

        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[educations].dates);
        var formattedUrl = HTMLschoolURL.replace("%data%", education.schools[educations].url);

        $(".education-entry:last").append(formattedName + formattedDegree, formattedDate, formattedLocation, formattedMajors, formattedUrl);

    }


    for (onlinecourse = 0; onlinecourse < education.onlineCourses.length; onlinecourse++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlinecourse].title);

        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlinecourse].school);



        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlinecourse].dates);

        var formattedURl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlinecourse].url);
        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURl);
    }

};


education.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);

