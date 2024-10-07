namespace Movies.Domain
{
    public class Movie
    {
        public string title { get; set; } = string.Empty;
        public int year { get; set; } = 1970;
        public string director { get; set; } = string.Empty;
        public string cast { get; set; } = string.Empty;
        public string genre { get; set; } = string.Empty;
        public string notes { get; set; } = string.Empty;
        public int id { get; set; } = 0;
        public RunningTimes runningTimes { get; set; } = new RunningTimes();
    }

    public class RunningTimes
    {
        public List<string> mon { get; set; }
        public List<string> tue { get; set; }
        public List<string> wed { get; set; }
        public List<string> thu { get; set; }
        public List<string> fri { get; set; }
        public List<string> sat { get; set; }
        public List<string> sun { get; set; }
    }


    public static class MovieRepository
    {


        public static List<Movie> GetMovies()
        {
            return new List<Movie>() {
                new Movie() { id = 100,  title="GeoStorm", director="Dean Devlin" },
                new Movie() { id = 107,  title="Kung Fu Panda 3", director="Jennifer Yuh Nelson" }
                };
        }

    }
}
