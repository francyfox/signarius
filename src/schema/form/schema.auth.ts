export default [
    {
        $el: 'h1',
        children: 'Login'
    },
    {
        $formkit: 'email',
        name: 'email',
        label: 'Email',
        validation: 'required|email',
    },
    {
        $formkit: 'password',
        name: 'password',
        label: 'Password',
        validation: 'required|length:3,16'
    },
]