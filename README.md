# Carousel Practice

a practice repository for making a react native carousel with proper animations

# Explanation

A friend recently gave me a walkthrough of a public demo for carousel behavior [here](https://www.youtube.com/shorts/bEuT2dmH0ns) and I wanted to find a way to recreate it.

# Constants

The demo has certain constants that we leverage, such that:

- The top image is full width and we can assume that all images are optomized to fit perfectly in the screen.
- Secondly, the images are all of the same size.
- Thirdly, the images are all of the same height and we can assume that the height is set in the css.

# Requirements

- we want to run the carousel such that the top image can swipe through the carousel on the bottom with animation.
- however, the bottom can go through "fast image" swiping, which would have no animation (it's instant).
- lastly, this needs to work on low-end devices at still 60fps.

# Potential Libraries

Aside from Expo to work on the app logic, there are certain libraries we can use for the animations. These are the main considerations as follows:

- [React Native Reanimated](https://docs.expo.dev/versions/latest/sdk/reanimated/)
- [Moti (Reanimated 3 under the hood, similiar API as framer-motion)](https://moti.fyi)

# Steps

1. Start with Simple Slide Content
2. Add Bottom Carousel To Render 15 Images
3. Create Gesture Controls
4. Add Animations, specifically the swipe animation
5. Optomize for Low End Devices
   a. Assume that Image Load will Take Time (so we have to wait on fetches)
   b. Paginate Results when given multiple images
   c. Debounce the image from rendering until the image has not been moved for a while.
