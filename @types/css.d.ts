// fix type declaration for css files
declare module "*.css" {
    const content: { [className: string]: string };
    export default content;
}
