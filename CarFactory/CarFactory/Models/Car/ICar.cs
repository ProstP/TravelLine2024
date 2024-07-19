using CarFactory.Models.BodyShape;
using CarFactory.Models.CarColor;
using CarFactory.Models.Engine;
using CarFactory.Models.SteeringPositions;
using CarFactory.Models.Transmission;

namespace CarFactory.Models.Car
{
    public interface ICar
    {
        IBodyShape BodyShape { get; }
        ICarColor Color { get; }
        IEngine Engine { get; }
        ITransmission Transmission { get; }
        SteeringPosition SteeringPosition { get; }
    }
}
