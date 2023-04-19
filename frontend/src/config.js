/**
 * @type {{
 *     api: {
 *         url: string,
 *         routes: {
 *             getUser: string
 *         },
 *     }
 * }}
 */
const config = {
    api: {
        url: 'http://localhost:8080',
        routes: {
            getUser: 'manage/inventory/user'
        }
    }
};

export default config;
