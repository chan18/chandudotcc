
using System.Collections.Generic;
using Statiq.Common;

public class Quotes : SyncShortcode
{
    public override ShortcodeResult Execute(KeyValuePair<string, string>[] args, string content, IDocument document, IExecutionContext context)
    {
       string htmlData = @$"
                        <div class='container'>
                            <div class='flex flex-row p-4'>
                                <div class='w-1/2'>
                                <blockquote class='font-serif '>
                                    <svg class='w-8 h-8 text-gray-400 dark:text-gray-600 mb-4 ' aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 18 14'>
                                    <path
                                        d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
                                    </svg>
                                    <p class=''>'{content}'</p>
                                </blockquote>

                                <div class='mt-6'>
                                    <div class='flex flex-row space-x-1 text-sm  font-medium'>
                                    <span>  </span>
                                    <div>  </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>";

        return htmlData.ToString();
    }
}