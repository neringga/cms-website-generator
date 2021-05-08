﻿using System.IO;
 using System.Text;
 using theme_generator_backend.Controllers;

 namespace BlocklyThemeGeneratorBackend.Helpers
{
    public interface IThemeHelper
    {
        void UpdateThemeAsync(DataType type, string title, string content);
    }

    public class ThemeHelper : IThemeHelper
    {
        private const string PathToWordpressTheme = @"C:\xampp\htdocs\testsite\wp-content\themes\basic_theme\";
        private const string PathToDrupalTheme = @"C:\xampp\htdocs\drupal1\themes\new_theme\templates\";
        private const string PathToJoomlaTheme = @"C:\xampp\htdocs\joomla-4\templates\new_theme\";
        private const string DefaultPath = @"C:\Users\Neringa\Desktop\bakalauras\";
        
        public void UpdateThemeAsync(DataType type, string title, string content)
        {
            // var path = type == DataType.Drupal ? PathToDrupalTheme :
            //     type == DataType.Joomla ? PathToJoomlaTheme : PathToWordpressTheme;
            var fileToUpdate = PathToWordpressTheme + title;
            var data = Encoding.UTF8.GetBytes(content);
            
            using (var stream = File.Open(fileToUpdate, FileMode.Create, FileAccess.Write, FileShare.ReadWrite))
            {
                stream.Write(data);
            }
        }
    }
}