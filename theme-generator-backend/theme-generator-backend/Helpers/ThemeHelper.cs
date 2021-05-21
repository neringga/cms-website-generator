﻿using System.IO;
 using System.Text;
 using theme_generator_backend.Controllers;

 namespace BlocklyThemeGeneratorBackend.Helpers
{
    public interface IThemeHelper
    {
        void UpdateThemeAsync(string title, string content);
    }

    public class ThemeHelper : IThemeHelper
    {
        private const string DefaultPath = @"C:\xampp\htdocs\";
        
        public void UpdateThemeAsync(string title, string content)
        {
            var fileToUpdate = DefaultPath + title;
            var data = Encoding.UTF8.GetBytes(content);
            
            using (var stream = File.Open(fileToUpdate, FileMode.Create, FileAccess.Write, FileShare.ReadWrite))
            {
                stream.Write(data);
            }
        }
    }
}