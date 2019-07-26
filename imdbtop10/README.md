# Basic React Native App

## Usage (creating an example app)

1. Please make sure you have installed necessary dependencies depending on your development OS and target OS. Follow the guidelines given on official react native documentation for installing dependencies: https://facebook.github.io/react-native/docs/getting-started

2. Make sure node version is >= v10.13.0

3. Ensure emulator is ready or mobile device is connected to your machine.

4. `git clone http://gitlab-students.int.intek.edu.vn/basic-react-native-app/lbaodong.git`

5. `cd lbaodong`

6. `yarn` or `npm install`

7. - For iOS 

   ```
   react-native run-ios
   ```

   - For Android 

   ```
   react-native run-android
   ```

#### While running example, you may (not necessarily) run into following issues:

1. When you execute `react-native run-ios` for the first  time, it starts a metro bundler in parallel. It can result into some errors, since build process isn't complete yet. Try the following to fix this:

   1. Close/stop the metro bundler process.
   2. Let the build process finish completely, it can take usually around 2-3 minutes for the first time.
   3. Start the metro bundler manually by executing `yarn start` inside the project directory.

2. When you execute `react-native run-android`, you may (not necessarily) run into following error:

   ```
   info Starting JS server...
   info Building and installing the app on the device (cd android && ./gradlew app:installDebug)...
   Starting a Gradle Daemon, 1 incompatible Daemon could not be reused, use --status for details
   
   FAILURE: Build failed with an exception.
   
   * What went wrong:
   A problem occurred configuring project ':@react-native-community_netinfo'.
   > SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.
   
   * Try:
   Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.
   
   * Get more help at https://help.gradle.org
   
   BUILD FAILED in 13s
   error Could not install the app on the device, read the error above for details.
   Make sure you have an Android emulator running or a device connected and have
   set up your Android development environment:
   https://facebook.github.io/react-native/docs/getting-started.html
   error Command failed: ./gradlew app:installDebug. Run CLI with --verbose flag for more details.
   ```

   To resolve this, do the following:

   1. Create a file named `local.properties` inside `android` in the project directory

   2. Put the this line in that file. Make sure Sdk path is correctly mentioned as per your system: 

      ```
      sdk.dir=/home/{user_name}/Android/Sdk/
      ```

   3. Rerun `react-native run-android` in the project directory.
