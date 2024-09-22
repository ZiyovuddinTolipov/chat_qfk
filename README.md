# Realtime Messaging app with Laravel 11 and React

This project is a starter template of realtime messaging application with Laravel 11 and React. 
The project uses Laravel Reverb as a choice of websocket server.

## Project Features

- Sending and receiving messages in realtime
- Sending emojies
- Send markdown messages
- Deleting your own sent messages
- Load older messages with infinite scroll loading
- Sending all types of files
- Dedicated button to quickly shared images
- Dedicated button to record and send audio files
- Preview on small screen and on full screen of images, videos, audio and PDFs
- Ability to add new users
- Block and Unblock users
- Give and remove admin permissions to users.
- Create Groups and add users
- Edit or delete groups. This will start a background job, so that if the group is large and needs several minutes to be deleted,
  it will be deleted in background and will notify users using websockets.
- Update your own profile details: Name, email, password or profile picture
- Fully responsive UI working on very small devices.

## Demo
You can check the working demo right here: [larachat.chat](https://larachat.chat).


## Installation
1. Download or clone the project using git
1. Navigate into the project's root directory using terminal
1. Copy `.env.example` and create `.env` file
1. Adjust `DB_*` parameters in `.env`
1. Adjust `REVERB_*` parameters in `.env`
1. Execute `composer install`
1. Set application encryption key: `php artisan key:generate --ansi`
1. Execute migrations with seed data: `php artisan migrate --seed`
1. Start the server: `php artisan serve`
1. Open new terminal and execute `npm install` and `npm run dev` to start vite server for local development
1. Open another terminal and execute `php artisan reverb` to start Laravel Reverb's local websocket server
1. Open one more new terminal and execute `php artisan queue:work` which will start listening for background jobs.
   When we try to delete the group, `queue:work` command is what will listen to Group Delete job, delete the group and will emit socket message.

## Deployment

Please Check the [YouTube tutorial](https://youtu.be/UyEZ74l40yU) to see full instructions regarding how you can deploy this on production.

