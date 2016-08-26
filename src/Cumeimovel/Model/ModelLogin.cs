using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Cumeimovel.Model
{
    public class ModelLogin
    {
        public string User { get; set; }
        public string Pass { get; set; }
        public bool IsPersistent { get; set; }
        public string ReturnUrl { get; set; }
    }
}
