class PurpleHappyFish extends Fish {

  constructor(options) {
    super(options); // Call super to run the code inside `Fish`'s constructor
    this.imageUri = '/images/purple-happy-fish.jpg'; // Set the image
    this.height = options.height || 100;
    this.width = options.width || 100;
  }

}