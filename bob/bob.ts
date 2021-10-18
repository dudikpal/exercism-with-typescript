export function hey(message: string): string {

    message = message.replace(/\s/g, '');
    console.log('begin' + message + 'end');
    if (message.match('\\?$')) {
        //if (message.match('^.*([^a-z][A-Z])+.*\\?$')) {
        if (message.match(/(?=[a-z0-9])/)) {

            return 'Sure.';
        }
        return 'Calm down, I know what I\'m doing!';

    //} else if (message.match('^.*([^a-z][A-Z])+.*[^?]$')) {
    } else if (message.match(/^[\WA-Z0-9]+$/)) {

        if (message.match(/[^\Wa-z\d]+/) ) {
            return 'Whoa, chill out!';
        } else {
            return 'Whatever.';
        }
    } else {
        if (message.match(/^\s*$/)) {
            return 'Fine. Be that way!';
        }
        return 'Whatever.';
    }
}
