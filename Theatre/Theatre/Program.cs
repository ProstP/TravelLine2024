using Domain.Repositories;
using Infrastructure.Foundation;
using Infrastructure.Foundation.Repository;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder( args );

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<TheaterDbContext>( options =>
{
    options.UseSqlServer( "Server=LAPTOP-U0R8E398\\SQLEXPRESS;Database=Theatre;Trusted_Connection=True;TrustServerCertificate=True;" );
} );

builder.Services.AddScoped( typeof( IRepository<> ), typeof( Repository<> ) );

var app = builder.Build();

// Configure the HTTP request pipeline.
if ( app.Environment.IsDevelopment() )
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();

app.MapControllers();

app.Run();
