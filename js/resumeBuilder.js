/*
This is empty on purpose! Your code to build the resume will go here.
 */


var bio =  {
	"name": "Kyle Booth",
	"role": "Front-End Web Developer",
	"contacts": [ {
		"mobile": "404-488-8721",
		"email": "kjbooth1000@yahoo.com",
		"github": "catahoulaleopard",
		"twitter": "@catahoulaleopar",
		"location": "Atlanta"
		}],
	"welcomeMessage": "Hi, Welcome!",
	"skills": ["HTML", "CSS", "JavaScript", "Web Design", "Writing"],
	"biopic": "https://lh6.googleusercontent.com/-FP3J4CQJ3Cg/AAAAAAAAAAI/AAAAAAAAAAA/pLbpZU_Ed60/s96-c-mo/photo.jpg",
	"display": function(){}
  }

var education =  {
	"schools": [
		{
			"name": "BYZoo",
			"city": "Provo",
			"degree": "BA",
			"major": "English",
			"gradyear": "1995"
		}, 
		{
			"name": "Utah State U",
			"city": "Logan",
			"degree": "Associate",
			"major": "Business Info Systems",
			"gradyear": "2004"
		}
	],
	"onlineCourses": [
		{
			"title": "Version Control: How to Use Git and GitHub",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/courses/ud775"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/courses/ud804"
		}
		{
			"title": "30 Days to Learn jQuery",
			"school": "Envato Tuts+",
			"date": "2015",
			"url": "http://code.tutsplus.com/courses/30-days-to-learn-jquery"
		}
	],
	"display": function(){}
}

var work =  {
	"jobs": [
		{
			"employer": "Anderson Press Inc.",
			"title": "Contract Web Designer",
			"location": "Atlanta",
			"dates": "2006-2013",
			"description": "Worked with a team of designers and coders to build websites for a number of the subsidiary companies of the parent company."
		}, 
		{
			"employer": "Standard-Examiner",
			"title": "Website Managing Editor",
			"location": "Ogden, UT",
			"dates": "2004-2006",
			"description": "Published and oversaw the publishing of each day's news stories to the newspaper's website."
		}
	],
	"display": function(){}
}

var projects =  {
	"projects": [
		{
			"title": "theatreinthesquare",
			"dates": "2016",
			"description": "Designed and built the theatre's new website.",
			"images": [
					"images/theatreinthesquare_thumbnail01.jpg",
					"images/theatreinthesquare_thumbnail02.jpg"
				]
		}, 
		{
			"title": "thenakedcrepe",
			"dates": "2016",
			"description": "Designed and built this cool small business's new website.",
			"images": [
					"images/thenakedcrepe_thumbnail01.jpg",
					"images/thenakedcrepe_thumbnail02.jpg"
				]
		}, 
		{
			"title": "darkhorsewoodworks",
			"dates": "2014-2015",
			"description": "Designed and built the company's new website.",
			"images": [
					"images/darkhorsewoodworks_thumbnail01.jpg",
					"images/darkhorsewoodworks_thumbnail02.jpg"
				]
		}, 
		{
			"title": "dimensionworks",
			"dates": "2015",
			"description": "Designed and built the company's new website.",
			"images": [
					"images/dimensionworks_thumbnail01.jpg"
				]
		}, 
	],
	"display": function(){}
}




//         BEGIN DISPLAY FUNCTIONS ******************************************
//         WORK EXPERIENCE ***********************
work.display = function() {
$("#workExperience").append(HTMLworkStart);

var formattedWorkEmployer =  [],
	formattedWorkTitle = [],
	formattedWorkDates = [],
	formattedWorkLocation = [],
	formattedWorkDescription = [],
	formattedWorkJob = [],
	formattedJobs = "";

var formattedWorkList = function() {
	if ( work.jobs.length > 0 ) {
		for ( var i=0; i < work.jobs.length; i++ ) {

			formattedWorkEmployer[i] = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			formattedWorkTitle[i] = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			formattedWorkDates[i] = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			formattedWorkLocation[i] = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			formattedWorkDescription[i] = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			formattedWorkJob[i] = formattedWorkEmployer[i] + formattedWorkTitle[i] + formattedWorkDates[i] + 
							formattedWorkLocation[i] + formattedWorkDescription[i];
			formattedJobs += formattedWorkJob[i];
		}
		return formattedJobs;
	} else return "****";
}
$(".work-entry").append(formattedWorkList);
}



//         PROJECTS ***********************
projects.display = function() {
	$("#projects").append(HTMLprojectStart);

	var formattedProjectsTitle = [],
		formattedProjectsDates = [],
		formattedProjectsDescription = [],
		formattedProjectsImages = [],
		formattedProjectsProject = [],
		formattedProjects = "";

	var formattedProjectsList = function() {
		if ( projects.projects.length > 0 ) {
			for ( var i=0; i < projects.projects.length; i++ ) {

				formattedProjectsTitle[i] = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
				formattedProjectsDates[i] = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
				formattedProjectsDescription[i] = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
				formattedProjectsImages[i] = "";
				function projectImagesList() {
					if ( projects.projects[i].images.length > 0 ) {
						for ( var j=0; j < projects.projects[i].images.length; j++ ) {
								formattedProjectsImages[i] += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
							}
						return formattedProjectsImages[i];
					} else return "****";
				}
				formattedProjectsProject[i] = formattedProjectsTitle[i] + formattedProjectsDates[i] + 
								formattedProjectsDescription[i] + projectImagesList();
				formattedProjects += formattedProjectsProject[i];
			}
			return formattedProjects;
		} else return "****";
	}
	$(".project-entry").append(formattedProjectsList);
}


//         EDUCATION ***********************
education.display = function() {
$("#education").append(HTMLschoolStart); 

var formattedSchoolName =  [],
	formattedSchoolDegree = [],
	formattedSchoolDates = [],
	formattedSchoolLocation = [],
	formattedSchoolMajor = [],
	formattedSchoolSchool = [],
	formattedSchools = "";

var formattedSchoolsList = function() {
	if ( education.schools.length > 0 ) {
		for ( var i=0; i < education.schools.length; i++ ) {

			formattedSchoolName[i] = HTMLschoolName.replace("%data%", education.schools[i].name);
			formattedSchoolDegree[i] = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			formattedSchoolDates[i] = HTMLschoolDates.replace("%data%", education.schools[i].gradyear);
			formattedSchoolLocation[i] = HTMLschoolLocation.replace("%data%", education.schools[i].city);
			formattedSchoolMajor[i] = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			formattedSchoolSchool[i] = formattedSchoolName[i] + formattedSchoolDegree[i] + formattedSchoolDates[i] + 
							formattedSchoolLocation[i] + formattedSchoolMajor[i];
			formattedSchools += formattedSchoolSchool[i];
		}
		return formattedSchools;
	} else return "****";
}

$(".education-entry").append(formattedSchoolsList);

$(".education-entry").append(HTMLonlineClasses);

var formattedOnlineTitle =  [],
	formattedOnlineSchool = [],
	formattedOnlineDates = [],
	formattedOnlineURL = [],
	formattedOnlineCourse = [],
	formattedOnlineCourses = "";

var formattedCoursesList = function() {
	if ( education.onlineCourses.length > 0 ) {
		for ( var i=0; i < education.onlineCourses.length; i++ ) {

			formattedOnlineTitle[i] = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
			formattedOnlineSchool[i] = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			formattedOnlineDates[i] = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
			formattedOnlineURL[i] = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			formattedOnlineCourse[i] = formattedOnlineTitle[i] + formattedOnlineSchool[i] + formattedOnlineDates[i] + 
							formattedOnlineURL[i];
			formattedOnlineCourses += formattedOnlineCourse[i];
		}
		return formattedOnlineCourses;
	} else return "****";
}

$(".education-entry").append(formattedCoursesList);
}

//        END DISPLAY FUNCTIONS ******************************************


//         PIECE RESUME TOGETHER ***************************************
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", "Kyle");
$("#header").prepend(formattedName);

//         TOP HEADER ***********************
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[0].mobile),
	formattedContactEmail = HTMLemail.replaceAll("%data%", bio.contacts[0].email),
	formattedContactTwitter = HTMLtwitter.replaceAll("%data%", bio.contacts[0].twitter),
	formattedContactGithub = HTMLgithub.replaceAll("%data%", bio.contacts[0].github),
	formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts[0].location),
	topContactsList = formattedMobile + formattedContactEmail + formattedContactTwitter + 
								formattedContactGithub + formattedContactLocation;
$("#topContacts").append(topContactsList);$("#footerContacts").append(topContactsList);

//         HEADER DECK ***********************
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic),
	formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage),
	formattedSkills = "",
	headerDeck = formattedBioPic + formattedWelcome + HTMLskillsStart;

var formattedSkillsList = function() {
	if ( bio.skills.length > 0 ) {
		for ( var i=0; i < bio.skills.length; i++ ) {
			formattedSkills += HTMLskills.replace("%data%", bio.skills[i]);
		}
		return formattedSkills;
	} else return "****";
}
$("#header").append(headerDeck);
$("#skills").append(formattedSkillsList);

work.display();
projects.display();
education.display();
//         MAP ***********************
$("#mapDiv").append(googleMap); 

