
using System.Collections.Generic;
using System.Linq;
using Statiq.Common;

public class QandA : SyncShortcode
{
    public override ShortcodeResult Execute(KeyValuePair<string, string>[] args, string content, IDocument document, IExecutionContext context)
    {
        string htmlCode = @$"<div class='container'>
                          <!-- question and answer -->
                          <section>
                              <details class='group cursor-pointer [&_svg]:open:-rotate-180'>
                              <summary class='flex select-none group-open:text-blue-400'>
                                  <div>
                                  <!-- You can add your own triangle/arrow SVG here -->
                                  <svg class='rotate-0 transform fill-blue-700 dark:fill-blue-200 transition-all duration-300' fill='none' height='20'
                                      width='20' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                      viewBox='0 0 24 24'>
                                      <polyline points='6 9 12 15 18 9'></polyline>
                                  </svg>
                                  </div>
                                  <div> {args.FirstOrDefault().Value} </div>
                              </summary>
                              <div class='px-4 py-1'>
                                  {content}
                              </div>
                              </details>
                          </section>
                          </div>";

        return htmlCode.ToString();
    }
}