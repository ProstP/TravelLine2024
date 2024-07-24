using Domain.Entities;
using Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Theatre.Contracts.Requests;

namespace Theatre.Controllers
{
    [ApiController]
    [Route( "api/working_hours" )]
    public class WorkingHoursController : ControllerBase
    {
        private IWorkingHoursRepository _workingHoursRepository;

        public WorkingHoursController( IWorkingHoursRepository workingHoursRepository )
        {
            _workingHoursRepository = workingHoursRepository;
        }

        [HttpGet]
        public IActionResult GetList()
        {
            var workingHoursList = _workingHoursRepository.GetAll();

            return Ok( workingHoursList );
        }

        [HttpGet, Route( "{id:int}" )]
        public IActionResult Get( [FromRoute] int id )
        {
            var workingHours = _workingHoursRepository.Get( id );

            if ( workingHours == null )
            {
                return BadRequest( $"Working hours with id: {id} not found" );
            }

            return Ok( workingHours );
        }

        [HttpGet, Route( "theatre/{theatreId:int}" )]
        public IActionResult GetByTheatreId( [FromRoute] int theatreId )
        {
            var workingHoursList = _workingHoursRepository.GetByTheatreId( theatreId );

            return Ok( workingHoursList );
        }

        [HttpPost]
        public IActionResult Create( [FromBody] CreateWorkingHoursRequest request )
        {
            var workingHours = new WorkingHours(
                new TimeOnly( request.OpeningHours, request.OpeningMunite ),
                new TimeOnly( request.ClosingHours, request.ClosingMunite ),
                request.ValidFrom, request.ValidUntil, request.TheatreId );

            _workingHoursRepository.Create( workingHours );

            return Ok( workingHours );
        }

        [HttpDelete, Route( "{id:int}" )]
        public IActionResult Delete( [FromRoute] int id )
        {
            var workingHours = _workingHoursRepository.Get( id );

            if ( workingHours != null )
            {
                _workingHoursRepository.Remove( workingHours );
            }

            return Ok();
        }
    }
}
