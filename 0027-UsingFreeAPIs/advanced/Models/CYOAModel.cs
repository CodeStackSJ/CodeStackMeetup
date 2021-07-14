namespace CYOA_Starter.Models
{
    public class CYOAModel
    {
        public int Id { get; set; }
        public string Scenes { get; set; }
        public string Choice1 { get; set; }
        public string Choice2 { get; set; }
        public string Choice3 { get; set; }
        public int Result1 { get; set; }
        public int Result2 { get; set; }
        public int Result3 { get; set; }
        public CYOAModel() { }
    }
}