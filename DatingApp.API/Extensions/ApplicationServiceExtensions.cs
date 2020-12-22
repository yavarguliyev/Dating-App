using System;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Data.Repositories.Implementations;
using DatingApp.API.Data.Repositories.Interfaces;
using DatingApp.API.Data.UnitOfWorks;
using DatingApp.API.Helpers;
using DatingApp.API.Mappings;
using DatingApp.API.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DatingApp.API.Extensions
{
  public static class ApplicationServiceExtensions
  {
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
      // Auto Mapper
      services.AddAutoMapper(typeof(MapperProfiles).Assembly);
      // Unif of Works
      services.AddScoped<IUnitOfWork, UnitOfWork>();

      services.AddSingleton<PresenceTracker>();
      services.Configure<CloudinarySettings>(config.GetSection("CloudinarySettings"));
      services.AddScoped<ITokenService, TokenService>();
      services.AddScoped<IPhotoService, PhotoService>();
      services.AddScoped<IUnitOfWork, UnitOfWork>();
      services.AddScoped<LogUserActivity>();

      // Database connection 
      services.AddDbContext<DataContext>(options =>
      {
        var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
        string connStr;

        // Depending on if in development or production, use either Heroku-provided
        // connection string, or development connection string from env var.
        if (env == "Development")
        {
          // Use connection string from file.
          connStr = config.GetConnectionString("DefaultConnection");
        }
        else
        {
          // Use connection string provided at runtime by Heroku.
          var connUrl = Environment.GetEnvironmentVariable("DATABASE_URL");

          // Parse connection URL to connection string for Npgsql
          connUrl = connUrl.Replace("postgres://", string.Empty);
          var pgUserPass = connUrl.Split("@")[0];
          var pgHostPortDb = connUrl.Split("@")[1];
          var pgHostPort = pgHostPortDb.Split("/")[0];
          var pgDb = pgHostPortDb.Split("/")[1];
          var pgUser = pgUserPass.Split(":")[0];
          var pgPass = pgUserPass.Split(":")[1];
          var pgHost = pgHostPort.Split(":")[0];
          var pgPort = pgHostPort.Split(":")[1];

          connStr = $"Server={pgHost};Port={pgPort};User Id={pgUser};Password={pgPass};Database={pgDb}";
        }

        // Whether the connection string came from the local development configuration file
        // or from the environment variable from Heroku, use it to set up your DbContext.
        options.UseSqlite(connStr);
      });

      return services;
    }
  }
}