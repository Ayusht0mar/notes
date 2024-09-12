import CodeSnippet from "@/components/CodeSnippet";

const GitHubPage = () => {
    return ( 
        <div>
            <h1>Github</h1>
            <p>
                Git
                A tech that saves history of the code so if something goes wrong we can go back to the old code

                GitHub 
                Allow's user to upload reposetories and saves the history of the projects

                Who made the change , when and what change.
            </p>
            <CodeSnippet language="javascript">
                {`<a href="javascript/resources">Resources</a>`}
            </CodeSnippet>
        </div>
     );
}
 
export default GitHubPage;