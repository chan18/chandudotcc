
using System.Collections.Generic;
using System.Xml.Linq;
using Statiq.Common;

public class Check : SyncShortcode
{   
    public override ShortcodeResult Execute(KeyValuePair<string, string>[] args, string content, IDocument document, IExecutionContext context)
    {
        var span = new XElement("span", content.ToString());

        XElement data = new XElement("span",
                new XAttribute("class", "flex flex-row items-center space-x-2 my-2"),
                new XElement("svg",
                    new XAttribute("class", "h-7 w-7 fill-indigo-500 dark:fill-indigo-300"),
                    
                    new XAttribute("viewBox", "0 0 24 24"),
                    new XAttribute("fill", "currentColor"),
                    new XElement("path",
                        new XAttribute("fill-rule", "evenodd"),
                        new XAttribute("d", "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"),
                        new XAttribute("clip-rule", "evenodd")
                    )
                )
            );

        data.Add(span);


        return data.ToString();
    }
}