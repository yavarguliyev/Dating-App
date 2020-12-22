using System;
using System.Text.Json.Serialization;
using DatingApp.API.Extensions;
using DatingApp.API.Middleware;
using DatingApp.API.SignalR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace DatingApp.API
{
  public class Startup
  {
    private readonly IConfiguration _configuration;

    public Startup(IConfiguration configuration)
    {
      _configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddApplicationServices(_configuration);
      // controllers without view
      services.AddControllers()
          .AddJsonOptions(options =>
          {
            options.JsonSerializerOptions.Converters.Add(new JsonStringEnumConverter());
          });

      // api cors for allowing methods that coming from different localhosts
      services.AddCors();

      // routing to lowercase
      services.AddRouting(options => options.LowercaseUrls = true);

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
      services.AddIdentityServices(_configuration);
      services.AddSignalR();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseMiddleware<ExceptionMiddleware>();

      app.UseHttpsRedirection();

      app.UseRouting();
      app.UseCors(x => x
                      .AllowAnyHeader()
                      .AllowAnyMethod()
                      .WithExposedHeaders("WWW-Authenticate")
                      .WithOrigins("http://localhost:4200")
                      .AllowCredentials());

      app.UseAuthentication();
      app.UseAuthorization();

      app.UseDefaultFiles();
      app.UseStaticFiles();

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
        endpoints.MapHub<PresenceHub>("hubs/presence");
        endpoints.MapHub<MessageHub>("hubs/message");
      });
    }
  }
}
