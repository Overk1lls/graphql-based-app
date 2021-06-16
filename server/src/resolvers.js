module.exports = {
    Query: {
        cognito: (parent, { username }, { db }) => db.collection('real_users').findOne({ username: username }),
        totalCognito: (parent, args, { db }) => db.collection('real_users').estimatedDocumentCount(),
        allCognito: (parent, args, { db }) => db.collection('real_users').find().sort({ id: 1 }).toArray(),
        fetchDate: async (parent, args, { db }) => {
            const date = await db.collection('dates').findOne();
            return date.fetchDate.minutes;
        }
    }
};