if (localStorage.getItem("em") && localStorage.getItem("ps")) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;
            var check = (window.location.toString().indexOf("index.html") !== -1) && (window.location.toString().indexOf("#") === -1);

            if (res == "1" && check) {
                location.replace("#menu");
            }
        }
    };
    request.open("POST", "php/signin.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("&email=" + localStorage.getItem("em") + "&password=" + localStorage.getItem("ps"));
}

$("#sign-in").click(function () {
    var email = $("#email-signin").val();
    var password = $("#password-signin").val();
    var dataString = "&email=" + email + "&password=" + password;

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            // console.log(request);
            var res = request.responseText;

            // console.log(res);
            if (res == "1") {
                window.location.assign("#menu");

                localStorage.setItem("em", email);
                localStorage.setItem("ps", password);
            } else {
                $("#error").html(res);
            }
        }
    };

    request.open("POST", "php/signin.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

$("#form1").on('submit', function () {
    return false;
});

$("#enter").click(function () {
    var email = $("#email-signin").val();
    var password = $("#passwordl").val();
    var name = $("#name").val();
    var ieeemember = $("#ieeemember").val();
    var mobile = $("#mobile").val();
    var membershipno = $("#membershipno").val();
    var department = $("#department").val();
    var year = $("#year").val();
    var cpassword = $("#cpassword").val();

    var dataString = "&email=" + email + "&password=" + password + "&name=" + name + "&ieeemember=" + ieeemember + "&mobile=" + mobile + "&membershipno=" + membershipno + "&department=" + department + "&year=" + year;

    if (password !== cpassword) {
        $('#form2')[0].reset();

        //$("#form2").on('submit',function(){return false;});
        $("#error1").html("your passwords don't match")
    } else {
        var request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState == 4 && request.status == 200) {
                // console.log(request);
                var b = request.responseText;

                if (b !== "your passwords don't match" && b !== "That email address is taken.") {
                    $("#error").html("you signed up successfully ");
                    window.location.assign("#index");
                    $('#form2')[0].reset();
                } else {
                    $('#form2')[0].reset();
                    //$("#form2").on('submit',function(){return false;});
                    $("#error1").html(b)
                }
            }
        };

        request.open("POST", "http://176.32.230.48/ahmedhafez92.com/signup.php", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.send(dataString);
    }
});

$("#add-session").click(function () {
    var sessionName = $("#session-name").val();
    var sessionHall = $("#session-hall").val();
    var sessionStartTime = $("#session-start-time").val();
    var sessionEndTime = $("#session-end-time").val();
    var sessionDate = $("#session-date").val();
    var sessionDescription = $("#session-description").val();
    var sessionSpeakerName = $("#session-speaker-name").val();
    var sessionSpeakerPosition = $("#session-speaker-position").val();
    var sessionSpeakerBio = $("#session-speaker-bio").val();
    var sessionSpeakerEmail = $("#session-speaker-email").val();
    var sessionSpeakerMobile = $("#session-speaker-mobile").val();
    var sessionSpeakerLinkedin = $("#session-speaker-linkedin").val();

    var dataString = "&sessionName=" + sessionName + "&sessionHall=" + sessionHall + "&sessionStartTime=" + sessionStartTime + "&sessionEndTime=" + sessionEndTime +
        "&sessionDate=" + sessionDate + "&sessionDescription=" + sessionDescription + "&sessionSpeakerName=" + sessionSpeakerName + "&sessionSpeakerPosition=" +
        sessionSpeakerPosition + "&sessionSpeakerBio=" + sessionSpeakerBio + "&sessionSpeakerEmail=" + sessionSpeakerEmail + "&sessionSpeakerMobile=" +
        sessionSpeakerMobile + "&sessionSpeakerLinkedin=" + sessionSpeakerLinkedin;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#success-new-session").html(res);
            } else {
                $("#error-new-session").html(res);
            }
        }
    };

    request.open("POST", "php/addSession.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

$("#add-file").click(function () {
    var fileName = $("#file-name").val();
    var fileUrl = $("#file-url").val();

    var dataString = "&fileName=" + fileName + "&fileUrl=" + fileUrl;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#success-new-file").html(res);
            } else {
                $("#error-new-file").html(res);
            }
        }
    };

    request.open("POST", "php/addFile.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

$("#add-sponsor").click(function () {
    var sponsorName = $("#sponsor-name").val();
    var sponsorType = $("#sponsor-type").val();
    var sponsorImageUrl = $("#sponsor-image-url").val();
    var sponsorWebsite = $("#sponsor-website").val();

    var dataString = "&sponsorName=" + sponsorName + "&sponsorType=" + sponsorType + "&sponsorImageUrl=" + sponsorImageUrl +
        "&sponsorWebsite=" + sponsorWebsite;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#success-new-sponsor").html(res);
            } else {
                $("#error-new-sponsor").html(res);
            }
        }
    };

    request.open("POST", "php/addSponsor.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

$("#add-announcement").click(function () {
    var announcementTitle = $("#announcement-title").val();
    var announcementBody = $("#announcement-body").val();

    var dataString = "&announcementTitle=" + announcementTitle + "&announcementBody=" + announcementBody;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#success-new-announcement").html(res);
            } else {
                $("#error-new-announcement").html(res);
            }
        }
    };

    request.open("POST", "php/addAnnouncement.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);

});

$(document).on("pageshow", "#get-sessions", function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;
            $('#load-all-sessions').html(res);
        }
    };

    request.open("GET", "php/getSessions.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
});

$(document).on("pageshow", "#get-sponsors", function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;
            $("#load-all-sponsors").html(res);
        }
    };

    request.open("GET", "php/getSponsors.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
});

$(document).on("pageshow", "#get-files", function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;
            $("#load-all-files").html(res);
        }
    };

    request.open("GET", "php/getFiles.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
});

$(document).on("pageshow", "#get-announcements", function () {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;
            $("#load-all-announcements").html(res);
        }
    };

    request.open("GET", "php/getAnnouncements.php", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send();
});

$("#f").click(function () {
    $("#others").toggle();
});

$("#form3").on('submit', function () {
    return false;
});

$("#emailsend").click(function () {
    var subject = $("#subject").val();
    var email = $("#email3").val();
    var content = $("#content").val();
    var dataString = "subject=" + subject + "&email=" + email + "&content=" + content;
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            // console.log(request);
            var d = request.responseText;
            $("#error2").html(d)
        }
    };

    request.open("POST", "http://176.32.230.48/ahmedhafez92.com/message.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

/*
 * Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
 * Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
 */
$(document).on("pageinit", "#map", function () {
    var defaultLatLng = new google.maps.LatLng(31.20909, 29.90836); // Default to bibliotheca, AL when no geolocation support
    if (navigator.geolocation) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }

        function fail() {
            drawMap(defaultLatLng); // Failed to find location, show default map
        }

        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {
            maximumAge: 500000,
            enableHighAccuracy: true,
            timeout: 6000
        });
    } else {
        drawMap(defaultLatLng); // No geolocation support, show default map
    }

    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "bibliotheca alexandrina!"
        });
    }
});

$(document).on("pageshow", "#schedule", function () {
    $("#day-one").click();
});

// show first day sessions
$("#day-one").click(function () {
    $('#sessions-list').html('');

    $.ajax({
        type: 'GET',
        url: 'php/getSessions.php',
        data: {
            date: "05",
            id: null
        },
        success: function (data) {
            var sessions = JSON.parse($(data).html());

            sessions.forEach(function (session) {
                var session_html_str = '<li data-role="list-divider" class="time ui-li-divider ui-bar-inherit ui-first-child">' + session.SessionStartTime + '</li>' +
                    '<li class="ui-last-child"> <a id=\"slink-' + session.id + '\" class="ui-btn ui-btn-icon-right ui-icon-carat-r">\
                                <h2 id="name">' + session.SessionName + '</h2>\
                                <p><strong id="place">' + session.SessionHall + '</strong></p>\
                                <p class="ui-li-aside" ><strong id="session-duration">' + session.SessionStartTime + '  &#8594;  ' + session.SessionEndTime + '</strong></p>\
                            </a> </li>';

                //add session to list
                $('#sessions-list').append(session_html_str);
            });

            $('a[id^=slink-]').on("click", function () {
                ID = $(this).attr('id').split('-')[1];
                window.location = window.location.pathname + '#session-info?id=' + ID;
                location.reload();
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

// show second day sessions
$("#day-two").click(function () {
    $('#sessions-list').html('');

    $.ajax({
        type: 'GET',
        url: 'php/getSessions.php',
        data: {
            date: "06",
            id: null
        },
        success: function (data) {
            var sessions = JSON.parse($(data).html());

            sessions.forEach(function (session) {
                var session_html_str = '<li data-role="list-divider" class="time ui-li-divider ui-bar-inherit ui-first-child">' + session.SessionStartTime + '</li>' +
                    '<li class="ui-last-child"> <a id=\"slink-' + session.id + '\" class="ui-btn ui-btn-icon-right ui-icon-carat-r">\
                                <h2 id="name">' + session.SessionName + '</h2>\
                                <p><strong id="place">' + session.SessionHall + '</strong></p>\
                                <p class="ui-li-aside" ><strong id="session-duration">' + session.SessionStartTime + '  &#8594;  ' + session.SessionEndTime + '</strong></p>\
                            </a> </li>';

                //add session to list
                $('#sessions-list').append(session_html_str);
            });

            $('a[id^=slink-]').on("click", function () {
                ID = $(this).attr('id').split('-')[1];
                window.location = window.location.pathname + '#session-info?id=' + ID;
                location.reload();
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$(document).on("pageshow", "#session-info", function (event, data) {
    var id = window.location.hash.split('=')[1];

    $.ajax({
        type: 'GET',
        url: 'php/getSessions.php',
        data: {
            id: id,
            date: null
        },
        success: function (data) {
            var session = JSON.parse($(data).html());

            $('#s-name').text(session[0].SessionName);
            $('#s-name-title').text(session[0].SessionName);
            $('#s-description').text(session[0].SessionDescription);

            $("#speaker").on("click", function () {
                window.location = window.location.pathname + '#speakerinformation?id=' + id;
                // location.reload();
            });

            $("#feedback").on("click", function () {
                window.location = window.location.pathname + '#sessionfeedback?id=' + id;
                // location.reload();
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$(document).on("pageshow", "#speakerinformation", function (event, data) {
    var id = window.location.hash.split('=')[1];

    $.ajax({
        type: 'GET',
        url: 'php/getSessions.php',
        data: {
            id: id,
            date: null
        },
        success: function (data) {
            var session = JSON.parse($(data).html());

            $('#sp-session-name').text(session[0].SessionName);
            $('#sp-name').text(session[0].SpeakerName);
            $('#sp-position').text(session[0].SpeakerPosition);
            $("#sp-bio").text(session[0].SpeakerBio);
            $("#sp-email").text(session[0].SpeakerEmail);
            $("#sp-mobile").text(session[0].SpeakerMobile);
            $("#sp-linkedin").text(session[0].SpeakerLinkedin);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$(document).on("pageshow", "#files", function (event, data) {
    $.ajax({
        type: 'GET',
        url: 'php/getFiles.php',
        success: function (data) {
            var files = JSON.parse($(data).html());

            files.forEach(function (file) {
                $("#files-list").append('<li> <a class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="' + file.FileURL + '">' + file.FileName + '</a> </li>');
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$(document).on("pageshow", "#announcement", function (event, data) {
    $.ajax({
        type: 'GET',
        url: 'php/getAnnouncements.php',
        success: function (data) {
            var announcements = JSON.parse($(data).html());

            announcements.forEach(function (announcement) {
                var announcement_html_str = '<li data-role="list-divider" class="ui-li-divider ui-bar-inherit ui-first-child" style="margin-top:20px;">'
                    + announcement.Title + ' <span class="announcement-time">' + announcement.Time + '</span>'
                    + '</li>  <li class="ui-li-static ui-body-inherit ui-last-child"><p>' + announcement.Body + '</p></li>';

                $("#announcements-list").append(announcement_html_str);
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$(document).on("pageshow", "#sponsors", function (event, data) {
    $("#platinum-sponsors").click();
});

$("#platinum-sponsors").click(function () {
    $("#platinum-sponsors-list").html('');

    $.ajax({
        type: 'GET',
        url: 'php/getSponsors.php',
        data: {type: 'platinum'},
        success: function (data) {
            var sponsors = JSON.parse($(data).html());

            sponsors.forEach(function (sponsor) {
                var sponsors_html = '<a href="' + sponsor.SponsorWebsite + '" target="_blank">' +
                    '<img class="sponsor-image" src="' + sponsor.SponsorImageURL + '"></a>';

                $("#platinum-sponsors-list").append(sponsors_html);
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$("#golden-sponsors").click(function () {
    $("#golden-sponsors-list").html('');

    $.ajax({
        type: 'GET',
        url: 'php/getSponsors.php',
        data: {type: 'gold'},
        success: function (data) {
            var sponsors = JSON.parse($(data).html());

            sponsors.forEach(function (sponsor) {
                var sponsors_html = '<a href="' + sponsor.SponsorWebsite + '" target="_blank">' +
                    '<img class="sponsor-image" src="' + sponsor.SponsorImageURL + '"></a>';

                $("#golden-sponsors-list").append(sponsors_html);
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$("#silver-sponsors").click(function () {
    $("#silver-sponsors-list").html('');

    $.ajax({
        type: 'GET',
        url: 'php/getSponsors.php',
        data: {type: 'silver'},
        success: function (data) {
            var sponsors = JSON.parse($(data).html());

            sponsors.forEach(function (sponsor) {
                var sponsors_html = '<a href="' + sponsor.SponsorWebsite + '" target="_blank">' +
                    '<img class="sponsor-image" src="' + sponsor.SponsorImageURL + '"></a>';

                $("#silver-sponsors-list").append(sponsors_html);
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$("#partners").click(function () {
    $("#partners-list").html('');

    $.ajax({
        type: 'GET',
        url: 'php/getSponsors.php',
        data: {type: 'partner'},
        success: function (data) {
            var sponsors = JSON.parse($(data).html());

            sponsors.forEach(function (sponsor) {
                var sponsors_html = '<a href="' + sponsor.SponsorWebsite + '" target="_blank">' +
                    '<img class="sponsor-image" src="' + sponsor.SponsorImageURL + '"></a>';

                $("#partners-list").append(sponsors_html);
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.responseText);
        }
    });
});

$("#delete-entry-submit").click(function () {
    var tableName = $("#delete-entry-type").val();
    var rowId = $("#delete-entry-id").val();

    var dataString = "&tableName=" + tableName + "&rowId=" + rowId;

    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#success-delete-entry").html(res);
            } else {
                $("#error-delete-entry").html(res);
            }
        }
    };

    request.open("POST", "php/deleteEntry.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

var submitFeedback = function () {
    var TimingSuitable = $("input[name=timing]:checked").val();
    var TopicInteresting = $("input[name=Topic]:checked").val();
    var SessionEnoughInformation = $("input[name=information]:checked").val();
    var ContentValuable = $("input[name=Content]:checked").val();
    var SpeakerKnowledgeable = $("input[name=Speaker]:checked").val();
    var SpeakerPresentationSkills = $("input[name=presentation]:checked").val();
    var DurationEnough = $("input[name=Duration]:checked").val();
    var SessionRating = $("#slider").val();
    var ExpectAdditionalInformation = $("#flip").val();
    var SuggestionsOtherSessions = $("#textarea").val();
    var SuggestionsAndComments = $("#text").val();
    var useremail = $("#email-signin").val();
    var sessionid = window.location.hash.split('=')[1];

    var dataString = "&useremail=" + useremail + "&sessionid=" + sessionid + "&TimingSuitable=" + TimingSuitable +
        "&TopicInteresting=" + TopicInteresting + "&SessionEnoughInformation=" + SessionEnoughInformation + "&ContentValuable=" +
        ContentValuable + "&SpeakerKnowledgeable=" + SpeakerKnowledgeable + "&SpeakerPresentationSkills=" + SpeakerPresentationSkills +
        "&DurationEnough=" + DurationEnough + "&SessionRating=" + SessionRating + "&ExpectAdditionalInformation=" + ExpectAdditionalInformation +
        "&SuggestionsOtherSessions=" + SuggestionsOtherSessions + "&SuggestionsAndComments=" + SuggestionsAndComments;

    return dataString;
};

$("#session-feedback-submit-1").click(function () {
    var dataString = submitFeedback();
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#feedback-success-1").html(res);
            } else {
                $("#feedback-error-1").html(res);
            }
        }
    };

    request.open("POST", "php/sessionfeedback.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});

$("#session-feedback-submit-2").click(function () {
    var dataString = submitFeedback();
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            var res = request.responseText;

            if (res.indexOf("successfully") != -1) {
                $("#feedback-success-2").html(res);
            } else {
                $("#feedback-error-2").html(res);
            }
        }
    };

    request.open("POST", "php/sessionfeedback.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(dataString);
});
