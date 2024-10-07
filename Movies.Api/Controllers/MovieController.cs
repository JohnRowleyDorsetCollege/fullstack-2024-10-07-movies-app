using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Movies.Domain;

namespace Movies.Api.Controllers
{
   // [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        [EnableCors]
        [HttpGet]
        public async Task<List<Movie>>  Get()
        {
            return MovieRepository.GetMovies();
        }

    }
}
