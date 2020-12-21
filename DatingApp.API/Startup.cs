using System;
using System.Text;
using System.Text.Json.Serialization;
using AutoMapper;
using DatingApp.API.Data;
using DatingApp.API.Repositories.Implementations;
using DatingApp.API.Repositories.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;

namespace DatingApp.API
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }
    private readonly string ApiCors = "_apiCors";

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      #region 
      // controllers without view
      services.AddControllers()
          .AddJsonOptions(options =>
          {
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
          });

      // api cors for allowing methods that coming from different localhosts
      services.AddCors(opt =>
            {
              opt.AddPolicy(name: ApiCors, policy =>
              {
                policy
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .WithExposedHeaders("WWW-Authenticate")
                      .WithOrigins("http://localhost:4200")
                      .AllowCredentials();
              });
            });

      // routing to lowercase
      services.AddRouting(options => options.LowercaseUrls = true);
      // Auto Mapper
      services.AddAutoMapper(typeof(DatingRepository).Assembly);

      // swagger documentation for api
      services.AddSwaggerGen(options =>
            {
              options.SwaggerDoc("v1", new OpenApiInfo
              {
                Version = "v1",
                Title = "Api"
              });
              options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
              {
                Description = "JWT Authorization header using the Bearer scheme (Example: Authorization: 'Bearer {token}')",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer"
              });
              options.AddSecurityRequirement(new OpenApiSecurityRequirement
                {
                    {
                    new OpenApiSecurityScheme
                        {
                            Reference = new OpenApiReference
                            {
                                Type = ReferenceType.SecurityScheme,
                                Id = "Bearer"
                            }
                        },
                        Array.Empty<string>()
                    }
                });
            });

      // Database connection
      services.AddDbContext<DataContext>(opt => opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));

      services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
               .AddJwtBearer(options =>
               {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                   ValidateIssuerSigningKey = true,
                   IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII
                          .GetBytes(Configuration.GetSection("AppSettings:Token").Value)),
                   ValidateIssuer = false,
                   ValidateAudience = false,
                 };
               });

      services.AddScoped<IAuthRepository, AuthRepository>();
      services.AddScoped<IDatingRepository, DatingRepository>();
      #endregion
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      //   app.UseHttpsRedirection();

      app.UseRouting();
      app.UseCors(ApiCors);

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseSwagger();
      app.UseSwaggerUI(s =>
      {
        s.RoutePrefix = "";
        s.DocumentTitle = "Swagger Documentation";
        s.SwaggerEndpoint("/swagger/v1/swagger.json", "api/v1");
      });

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
