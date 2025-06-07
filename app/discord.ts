const getPepsiMembersCount = async (): Promise<number> => {
    let count = 15;
    try {
        const response = await fetch(
            `https://discord.com/api/v10/guilds/${process.env.SERVER_ID}?with_counts=true`,
            {
                headers: {
                    authorization: `Bot ${process.env.BOT_TOKEN}`
                },
                cache: 'force-cache',
                next: {
                    revalidate: 300
                }
            }
        );

        if (!response.ok) throw Error('Cannot fetch discord data');
        const json = await response.json();
        count = json['approximate_member_count'];
    } catch {
        console.error('Error while fetching discord data');
    }
    return count;
};

export default getPepsiMembersCount;
