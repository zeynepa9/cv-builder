const questions = [
    {
      id: 1,
      info: "Imagine yourself in a forest..",
      text: "What is the first animal you see?",
      explanation: "This question means the 'Reflection of your life'."
    },
    {
      id: 2, 
      text: "What is the second animal you see?",
      explanation: "This question means the 'Character of your life partner'."
    },
    {
      id: 3,
      info: "Imagine now there is a hut in front of you", 
      text: "Do you Bypass it? Knock before going in? Or rush in?",
      type: "text",
      explanation: {
        "bypass": "Bypassing it means 'not ready for relationship'.",
        "knock": "Knocking before going in means 'ready for relationship'.",
        "rushIn": "Rushing in means 'you're desperate'."
      }
    },
    {
      id: 4,
      info: "Now imagine yourself in the hut..",
      text: "There are 20 candles in it, how many will you light up? (1-20)",
      explanation: "The number of candles you light up represents 'your generosity'. The more you light up, the more generous you are."
    },
    {
      id: 5,
      text: "What is the shape of the table that you see in this hut, square or circle?",
      type: "text",
      explanation: {
        "square": "Choosing a Square table means you are 'stubborn'.",
        "circle": "Choosing a Circle table means you are 'flexible'."
      }
    },
    {
      id: 6,
      text: "How many chairs are at this table?",
      explanation: "The number of chairs represents 'your hospitality'. The more chairs, the better."
    },
    {
      id: 7,
      text: "There is a jug on the table, what is it made of?",
      explanation: "The material of the jug refers to the 'material of your heart'."
    },
    {
      id: 8,
      text: "How much water is in this jug? No water? 1/2 full? 3/4 full? Or totally full?",
      type: "text",
      explanation: {
        "no water": "No water means a lack of love.",
        "1/2 full": "1/2 full indicates a balanced amount of love.",
        "3/4 full": "3/4 full suggests a generous amount of love.",
        "totally full": "Totally full represents an abundance of love."
      }
    },
    {
      id: 9,
      info: "Now imagine that you are out of the hut and walking..",
      text: "You reach a beautiful waterfall. How fast is the speed of the waterfall? ('1' is slowest while '9' is fastest)",
      explanation: "The speed of the waterfall refers to your 'sex drive'."
    },
    {
      id: 10,
      text: "How many swans are there near the waterfall?",
      explanation: "The number of swans represents the 'number of best friends you have'."
    },
    {
      id: 11,
      text: "Now you've reached the river bank, and your destination is just opposite. How do you go over? Jump into the river and swim across? Or find another way?",
      type: "radio",
      explanation: {
        "jump": "Jumping into the river means 'you act without thinking'.",
        "find another way": "Finding another way means 'you think before you act'."
      }
    },
    {
      id: 12,
      text: "What are the first words that you will say when you got over?",
      explanation: "These words reflect 'the first words you will say on your wedding night'."
    },
    {
      id: 13,
      info: "Finally..",
      text: "Give 3 words to describe the sky.",
      explanation: "These 3 words describe 'your point of view on love'."
    },
    {
      id: 14,
      text: "And give 3 words to describe the sea.",
      explanation: "These 3 words describe 'the sounds of love-making'."
    }
  ];
  
  export default questions;
  