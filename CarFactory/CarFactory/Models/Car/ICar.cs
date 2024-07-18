using CarFactory.Models.BodyShape;
using CarFactory.Models.CarColor;
using CarFactory.Models.Engine;
using CarFactory.Models.Transmission;

namespace CarFactory.Models.Car
{
    public interface ICar
    {
        public IBodyShape BodyShape { get; }
        public ICarColor Color { get; }
        public IEngine Engine { get; }
        public ITransmission Transmission { get; }

    }
}
