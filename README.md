# ITW Mobile App

[Online Server](http://176.32.230.48/ahmedhafez92.com/ITW-Mobile-App-master/www/index.html)

## POST requests

To make any post request (submit to the database), type the path to 'index.html' in your browser followed by one of the following:

* '#new-session'
* '#new-file'
* '#new-sponsor'
* '#new-announcement'

Ex: "...index.html#new-session"

---

## GET requests

To make any get request (get from the database), type the path to 'index.html' in your browser followed by one of the following:

* '#get-sessions'
* '#get-files'
* '#get-sponsors'
* '#get-announcements'

Ex: "...index.html#get-sessions"

---

## DELETE requests

To make any delete request (delete from the database), type the path to 'index.html' in your browser followed by '#delete-entry'.
You will be prompted to choose the type you want to delete and its ID. To know the ID make a get request first.

Ex: "...index.html#delete-entry"
