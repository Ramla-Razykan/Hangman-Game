const wordList = [
    {
        word: "apple",
        hint: "A red or green fruit that keeps the doctor away."
    },
    {
        word: "river",
        hint: "A large stream of water flowing across the land."
    },
    {
        word: "star",
        hint: "A bright object in the night sky."
    },
    {
        word: "beach",
        hint: "A sandy area by the ocean or sea."
    },
    {
        word: "tree",
        hint: "A tall plant with branches and leaves."
    },
    {
        word: "cloud",
        hint: "A white or gray shape in the sky that brings rain."
    },
    {
        word: "fish",
        hint: "A creature that lives in water and has fins."
    },
    {
        word: "rain",
        hint: "Water falling from the sky in droplets."
    },
    {
        word: "moon",
        hint: "A round object that orbits Earth and shines at night."
    },
    {
        word: "cake",
        hint: "A sweet dessert, often with icing and candles."
    },
    {
        word: "book",
        hint: "A collection of pages with stories or information."
    },
    {
        word: "grass",
        hint: "A green plant covering fields and lawns."
    },
    {
        word: "snow",
        hint: "White frozen water that falls in winter."
    },
    {
        word: "cat",
        hint: "A small, furry pet that says 'meow'."
    },
    {
        word: "sun",
        hint: "The bright star that lights up our day."
    },
    {
        word: "milk",
        hint: "A white drink that comes from cows."
    },
    {
        word: "bird",
        hint: "An animal with feathers that can fly."
    },
    {
        word: "pen",
        hint: "An object used to write on paper."
    },
    {
        word: "shoe",
        hint: "Worn on the feet for walking."
    },
    {
        word: "chair",
        hint: "A seat with four legs, used to sit."
    },
    {
        word: "car",
        hint: "A vehicle with wheels used for transport."
    },
    {
        word: "cake",
        hint: "A sweet dessert, often baked for celebrations."
    },
    {
        word: "bed",
        hint: "A piece of furniture for sleeping."
    },
    {
        word: "desk",
        hint: "A table for working or studying."
    },
    {
        word: "hat",
        hint: "Worn on the head to block sun or for style."
    },
    {
        word: "leaf",
        hint: "A green part of a plant or tree."
    },
    {
        word: "key",
        hint: "Used to unlock doors."
    },
    {
        word: "bread",
        hint: "A baked food that is often sliced and toasted."
    },
    {
        word: "dog",
        hint: "A friendly pet that often barks."
    },
    {
        word: "ball",
        hint: "A round object used in many sports."
    },
    {
        word: "lamp",
        hint: "A device that gives light."
    },
    {
        word: "plant",
        hint: "A green organism that grows in soil."
    },
    {
        word: "cup",
        hint: "Used to hold drinks like tea or coffee."
    },
    {
        word: "bike",
        hint: "A two-wheeled vehicle powered by pedaling."
    },
    {
        word: "fork",
        hint: "A utensil with prongs used to eat food."
    },
    {
        word: "clock",
        hint: "Tells the time with numbers and hands."
    },
    {
        word: "wall",
        hint: "A solid structure that divides rooms."
    },
    {
        word: "glass",
        hint: "A transparent material used for windows and cups."
    },
    {
        word: "shirt",
        hint: "A piece of clothing worn on the upper body."
    },
    {
        word: "soap",
        hint: "Used to wash hands and clean."
    },
    {
        word: "mouse",
        hint: "A small animal or a computer accessory."
    },
    {
        word: "coin",
        hint: "A small, round piece of metal used as money."
    },
    {
        word: "bell",
        hint: "Rings to make a sound, often used in schools."
    },
    {
        word: "train",
        hint: "A vehicle that moves on tracks."
    },
    {
        word: "ship",
        hint: "A large boat that travels on water."
    },
    {
        word: "road",
        hint: "A path for vehicles to travel on."
    },
    {
        word: "tent",
        hint: "A temporary shelter used when camping."
    },
    {
        word: "rope",
        hint: "A strong, thick string used to tie things."
    },
    {
        word: "paint",
        hint: "A colored substance used to cover walls or create art."
    },
    {
        word: "drum",
        hint: "A musical instrument played by hitting it with sticks or hands."
    },
    {
        word: "car",
        hint: "A vehicle with four wheels used for transport."
    },
    {
        word: "tree",
        hint: "A tall plant with a trunk and branches."
    },
    {
        word: "book",
        hint: "A collection of pages bound together with stories or information."
    },
    {
        word: "fish",
        hint: "A creature that lives in water and has fins."
    },
    {
        word: "shoe",
        hint: "A type of footwear."
    },
    {
        word: "rain",
        hint: "Water that falls from the sky as droplets."
    },
    {
        word: "frog",
        hint: "A small green animal that hops and lives near water."
    },
    {
        word: "leaf",
        hint: "A flat, green part of a plant that collects sunlight."
    },
    {
        word: "ring",
        hint: "A small circular band often worn on fingers."
    },
    {
        word: "snow",
        hint: "Soft, white, frozen water crystals that fall in winter."
    },
    {
        word: "bed",
        hint: "Furniture used for sleeping."
    },
    {
        word: "hat",
        hint: "Worn on the head to keep warm or for style."
    },
    {
        word: "key",
        hint: "A small metal tool used to unlock doors."
    },
    {
        word: "cake",
        hint: "A sweet baked dessert, often enjoyed at birthdays."
    },
    {
        word: "milk",
        hint: "A white liquid often consumed at breakfast."
    },
    {
        word: "sand",
        hint: "Small grains found on beaches and deserts."
    },
    {
        word: "kite",
        hint: "A paper or cloth toy that flies in the wind."
    },
    {
        word: "star",
        hint: "A bright object in the sky visible at night."
    },
    {
        word: "egg",
        hint: "A common breakfast food laid by chickens."
    },
    {
        word: "pen",
        hint: "A tool used for writing with ink."
    },
    {
        word: "cat",
        hint: "A small pet animal known for purring."
    },
    {
        word: "sun",
        hint: "The bright star that gives us light and warmth."
    },
    {
        word: "cup",
        hint: "A small container used for drinking."
    },
    {
        word: "dog",
        hint: "A loyal pet animal often called man's best friend."
    },
    {
        word: "jam",
        hint: "A sweet spread made from fruit and sugar."
    },
    {
        word: "boat",
        hint: "A small vessel used to travel on water."
    },
    {
        word: "lamp",
        hint: "A device that provides light indoors."
    },
    {
        word: "soap",
        hint: "Used for washing hands and keeping clean."
    },
    {
        word: "corn",
        hint: "A yellow vegetable often eaten on the cob."
    },
    {
        word: "ball",
        hint: "A round object used in many sports and games."
    },
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
    {
        word: "volcano",
        hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        word: "novel",
        hint: "A long work of fiction, typically with a complex plot and characters."
    },
    {
        word: "sculpture",
        hint: "A three-dimensional art form created by shaping or combining materials."
    },
    {
        word: "symphony",
        hint: "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        word: "architecture",
        hint: "The art and science of designing and constructing buildings."
    },
    {
        word: "ballet",
        hint: "A classical dance form characterized by precise and graceful movements."
    },
    {
        word: "astronaut",
        hint: "A person trained to travel and work in space."
    },
    {
        word: "waterfall",
        hint: "A cascade of water falling from a height."
    },
    {
        word: "technology",
        hint: "The application of scientific knowledge for practical purposes."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "universe",
        hint: "All existing matter, space, and time as a whole."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "brilliant",
        hint: "Exceptionally clever, talented, or impressive."
    }
];