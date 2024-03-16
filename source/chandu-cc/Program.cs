using Statiq.App;
using Statiq.Web;

 
 await Bootstrapper
            .Factory
            .CreateWeb(args)
            .AddShortcode<QandA>()
            .AddShortcode<Idea>()
            .AddShortcode<Check>()
            .RunAsync();