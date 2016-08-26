using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;

namespace Cumeimovel
{
    public class AppSettings
    {
        private static string path = "server.json";

        public int Port { get; set; }

        public void Save()
        {
            File.WriteAllText(path, JsonConvert.SerializeObject(this, Formatting.Indented));
        }
        public static AppSettings Local
        {
            get
            {
                AppSettings settings = new AppSettings();

                if (File.Exists(path))
                {
                    settings = JsonConvert.DeserializeObject<AppSettings>(File.ReadAllText(path));
                }
                else
                {
                    settings.Port = 5000;
                    Console.WriteLine("Settings file not founded in: " + path);
                    settings.Save();
                }
                return settings;
            }
        }
    }
}
