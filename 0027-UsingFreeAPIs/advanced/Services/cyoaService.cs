using System.Collections.Generic;
using CYOA_Starter.Models;

namespace CYOA_Starter.Services
{
    public class cyoaService
    {
        public List<CYOAModel> StoryOBJ = new List<CYOAModel>(){
            new CYOAModel(){
                Id=1,
                Scenes="Into the Woods you go, as you continue your daily forest walk. But for some reason, today feels a little...different. You've wandered off the path you usually take and come across a fork on the path you're on... one path looks almost...unreal, and the other path, looks ominous. Which path will you take?",
                Choice1="Take the Unreal Path",
                Choice2="Take the Ominous Path",
                Choice3="",
                Result1=2,
                Result2=3,
                Result3=0
            },
            new CYOAModel(){
                Id=2,
                Scenes="Into the Unreal you go. Today, like most days, is filled with the smell of pine and fresh air. You look up and see the suns rays peeking through the treetops. You bring your gaze back to the ground. What's that? You've come across a seed, a rather normal-looking and unassuming seed. What do you do?",
                Choice1="Approach the Seed",
                Choice2="Ignore the Seed",
                Choice3="",
                Result1=4,
                Result2=5,
                Result3=0
            },
            new CYOAModel(){
                Id=3,
                Scenes="Into the Woods, you continued This is a strange path that you have never taken before. The air seems thick and humid, yet it has not rained in a few days. As your eyes adjust to the gloomy surroundings, you notice your walking up to something in the middle of the path. You have come across a strange-looking seed! What will you do with it?",
                Choice1="Approach",
                Choice2="Ignore",
                Choice3="",
                Result1=6,
                Result2=7,
                Result3=0
            },
            new CYOAModel(){
                Id=4,
                Scenes="Approaching the seed only sparked more curiosity and you took the seed home. As soon as you got home, being the plant lover you are, you planted the seed in hopes of finding out what type of seed it was. Remember those mysterious seeds from the news? Well, you got one...",
                Choice1="Continue",
                Choice2="",
                Choice3="",
                Result1=8,
                Result2=0,
                Result3=0
            },
            new CYOAModel(){
                Id=5,
                Scenes="Ignoring the seed turned out to be a normal day. You think to yourself, Today is not the day to turn the world upside down for a seed. You make your way out of the forest and complete your walk. Home sweet home you go. As you enter the door, you think... Wait, it's 2020, maybe approaching that seed would have been a good idea. Maybe I could've turned the world right side up? Oh well, there's always tomorrow and don't forget to wash your hands, you filthy animal!",
                Choice1="Play Again?",
                Choice2="",
                Choice3="",
                Result1=0,
                Result2=0,
                Result3=0
            },
            new CYOAModel(){
                Id=6,
                Scenes="What is this? Upon closer inspection, you notice it's not a seed, but an egg! You think to yourself, what could this egg be from? It's shaped very odd and it's so slimy. The texture looks smooth and inviting. But the smell..... is intresting to say the least. Then you think back to what you've heard about this part of the forest and its inhabitants. You suddenly recognize it's not of this world! So, you decide to burn it immediately!",
                Choice1="Continue.....",
                Choice2="",
                Choice3="",
                Result1=10,
                Result2=0,
                Result3=0
            },
            new CYOAModel(){
                Id=7,
                Scenes="Into the Woods, you continued... Having a bad feeling about this one you choose to ignore it. All you can think about is the unknown happening around you in the world today. Maybe someone else will look into it. You say in a low, mumbling voice. You continue down the path......",
                Choice1="Continue.....",
                Choice2="",
                Choice3="",
                Result1=9,
                Result2=0,
                Result3=0
            },
            new CYOAModel(){
                Id=8,
                Scenes="And one was all it took then, two days go by, and your excellent green thumb has caused the earth's ecosystem to spiral out of control. You raised an invasive alien plant species and the world is being taken over by this monstrous species (not to be confused with a monstera deliciosa, a once trendy plant, but now extinct!) and that's all thanks to you!",
                Choice1="Play Again?",
                Choice2="",
                Choice3="",
                Result1=0,
                Result2=0,
                Result3=0
            },
            new CYOAModel(){
                Id=9,
                Scenes="Ignoring the seed turned out to be a normal day. You think to yourself, Today is not the day to turn the world upside down for a seed. You make your way out of the forest and complete your walk. Home sweet home you go. As you enter the door, you think... Wait, it's 2020, maybe approaching that seed would have been a good idea. Maybe I could've turned the world right side up? Oh well, there's always tomorrow and don't forget to wash your hands, you filthy animal!",
                Choice1="Play Again?",
                Choice2="",
                Choice3="",
                Result1=0,
                Result2=0,
                Result3=0
            },
            new CYOAModel(){
                Id=10,
                Scenes="After waiting for the fire to die out... You search the remains and you realize it was actually a Xenomorph XX121. Your suspicions were correct... it truly wasn't of this world! Congratulations, the planet is saved!!!!! After realizing what just happened you go back home proud to have destroyed a dangerous species. Although you still can't breath easy, as you realize you are still in quarantine for who knows how long... But at least you have a story to tell the birds.",
                Choice1="Play Again?",
                Choice2="",
                Choice3="",
                Result1=0,
                Result2=0,
                Result3=0
            }
        };
    }
}