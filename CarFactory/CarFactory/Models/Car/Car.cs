using System.Text;
using CarFactory.Models.BodyShape;
using CarFactory.Models.CarColor;
using CarFactory.Models.Engine;
using CarFactory.Models.SteeringPositions;
using CarFactory.Models.Transmission;

namespace CarFactory.Models.Car
{
    public class Car : ICar
    {
        public IBodyShape BodyShape { get; set; }

        public ICarColor Color { get; set; }

        public IEngine Engine { get; set; }

        public ITransmission Transmission { get; set; }

        public SteeringPosition SteeringPosition { get; set; }

        public Car(
            IBodyShape bodyShape,
            ICarColor color,
            IEngine engine,
            ITransmission transmission,
            SteeringPosition steeringPosition )
        {
            BodyShape = bodyShape;
            Color = color;
            Engine = engine;
            Transmission = transmission;
            SteeringPosition = steeringPosition;
        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.AppendLine( "Car:" );
            sb.AppendLine( $"   Engine: {Engine.Name}" ); ;
            sb.AppendLine( $"   Transmission: {Transmission.Name}" ); ;
            sb.AppendLine( $"   Body shape: {BodyShape.Name}" ); ;
            sb.AppendLine( $"   Color: {Color.Color}" ); ;
            sb.AppendLine( $"   Transmission: {Transmission}" ); ;

            return sb.ToString();
        }
    }
}
