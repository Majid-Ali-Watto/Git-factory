import Swal from "sweetalert2";

function showArea() {
	Swal.fire({
		title: "First Time Push to Git",
		html: `
				<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>First Time Push to Git</title>
                        <style>
                            body {
                                font-size: 16px;
                                line-height: 1.6;
                            }
                            h1, h2 {
                                color: #333;
                                font-size: 1.8rem;
                            }
                            h3 {
                                font-size: 1.4rem;
                            }
                            p, li {
                                font-size: 1rem;
                            }
                            code {
                                font-size: 0.9rem;
                            }
                            ol {
                                margin-left: 20px;
                            }
                            pre, code {
                                color: #333;
                            }
                            code {
                                background-color: #f4f4f4;
                                padding: 3px 4px;
                                border-radius: 3px;
                            }
                            pre {
                                background-color: #333;
                                padding: 10px;
                                border-radius: 5px;
                                overflow-x: auto;
                            }
                            li, h3, p {
                                margin-bottom: 10px;
                                text-align: left;
                            }
                            li, p {
                                margin-left: 20px;
                            }
                            /* Responsive font sizes */
                            @media (max-width: 768px) {
                                body {
                                    font-size: 14px;
                                }
                                h1, h2 {
                                    font-size: 1.6rem;
                                }
                                h3 {
                                    font-size: 1.2rem;
                                }
                                p, li {
                                    font-size: 0.9rem;
                                }
                                code {
                                    font-size: 0.8rem;
                                }
                            }
                            @media (max-width: 480px) {
                                body {
                                    font-size: 12px;
                                }
                                h1, h2 {
                                    font-size: 1.4rem;
                                }
                                h3 {
                                    font-size: 1rem;
                                }
                                p, li {
                                    font-size: 0.8rem;
                                }
                                code {
                                    font-size: 0.7rem;
                                }
                            }
                        </style>
                    </head>
                    <body>

                        <h3>1. Initializing a New Repository</h3>
                        <p>This scenario is for when you are starting a new project.</p>
                        <ol>
                            <li><code>git init</code> - Initializes a new Git repository.</li>
                            <li><code>git add .</code> - Stages all files for commit.</li>
                            <li><code>git commit -m "Initial commit"</code> - Commits the staged changes.</li>
                            <li><code>git branch -M main</code> - Renames the branch to 'main' (if desired).</li>
                            <li><code>git remote add origin [url]</code> - Adds a remote repository.</li>
                            <li><code>git push -u origin main</code> - Pushes the local commits to the remote repository.</li>
                        </ol>

                        <h3>2. Pushing to an Existing Remote Repository</h3>
                        <p>If the remote repository already exists, you can push your local changes to it.</p>
                        <ol>
                            <li><code>git clone [url]</code> - Clones the existing repository.</li>
                            <li><code>git add .</code> - Stages changes in the working directory.</li>
                            <li><code>git commit -m "Your commit message"</code> - Commits your changes.</li>
                            <li><code>git push origin main</code> - Pushes the changes to the remote repository.</li>
                        </ol>

                        <h3>3. Handling Branch Naming Conflicts</h3>
                        <p>If the default branch name in the remote repository is different from your local branch, you may need to handle it explicitly.</p>
                        <ol>
                            <li><code>git branch -M main</code> - Renames your current branch to 'main' if not already named.</li>
                            <li><code>git push -u origin main</code> - Pushes your 'main' branch to the remote repository.</li>
                        </ol>

                        <h3>4. Force Pushing (Use with Caution)</h3>
                        <p>If you need to overwrite the remote branch with your local branch, you can use force push, but this should be done carefully.</p>
                        <ol>
                            <li><code>git push -f origin main</code> - Force pushes your local 'main' branch to the remote repository, overwriting the remote branch.</li>
                        </ol>

                        <h3>5. Initial Push with Existing Commits</h3>
                        <p>If you have already committed changes but haven't pushed them yet, follow these steps:</p>
                        <ol>
                            <li><code>git remote add origin [url]</code> - Adds the remote repository.</li>
                            <li><code>git push -u origin main</code> - Pushes the local commits to the remote repository.</li>
                        </ol>

                        <h3>Conclusion</h3>
                        <p>These are the common cases for pushing to a Git repository for the first time. Make sure to handle branch names and conflicts appropriately to maintain a clean project history.</p>
                    </body>
                </html>`,

		focusConfirm: true,
	});
}

export default showArea;
