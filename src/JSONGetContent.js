export default function JSONGetContent(data, section) {

    const default_value = null;
    const footer_content = [
        {
            title: "Women/女性用製品情報",
            subnav: [
                {
                    title: "シリーズから選ぶ",
                    fields: [
                        {
                            title: "モイスチャーシリーズ",
                            link: "/"
                        },
                        {
                            title: "リフレッシュシリーズ",
                            link: "/"
                        },
                    ],
                },
                {
                    title: "アイテムから選ぶ",
                    fields: [
                        {
                            title: "シャンプー",
                            link: "/"
                        },
                        {
                            title: "コンディショナー",
                            link: "/"
                        },
                        {
                            title: "地肌ケアマッサージクリーム",
                            link: "/"
                        },
                        {
                            title: "洗い流すトリートメント",
                            link: "/"
                        },
                        {
                            title: "洗い流さないトリートメント",
                            link: "/"
                        },
                    ],
                }
            ]
        },
        {
            title: "Men/男性用製品情報",
            subnav: [
                {
                    title: "h&s PROから選ぶ",
                    fields: [
                        {
                            title: "コントロールシリーズ",
                            link: "/"
                        },
                        {
                            title: "エナジーシリーズ",
                            link: "/"
                        },
                        {
                            title: "デオアクティブシリーズ",
                            link: "/"
                        }
                    ],
                },
                {
                    title: "h&s for menから選ぶ",
                    fields: [
                        {
                            title: "ボリュームアップシリーズ",
                            link: "/"
                        },
                        {
                            title: "スカルプEXシリーズ",
                            link: "/"
                        }
                    ],
                },
                {
                    title: "h&s for menから選ぶ",
                    fields: [
                        {
                            title: "シャンプー",
                            link: "/"
                        },
                        {
                            title: "トニック",
                            link: "/"
                        },
                        {
                            title: "ヘアスタイラー",
                            link: "/"
                        }
                    ],
                }
            ]
        },
        {
            title: "TVCM",
            subnav: [
                {
                    title: "h&s動画一覧",
                    fields: [
                        {
                            title: "h&s",
                            link: "/"
                        },
                        {
                            title: "PRO【TVCM15秒】ヘア",
                            link: "/"
                        },
                        {
                            title: "ロス予防にスカルプショ",
                            link: "/"
                        },
                        {
                            title: "ット編",
                            link: "/"
                        },
                        {
                            title: "女性",
                            link: "/"
                        },
                        {
                            title: "男性",
                            link: "/"
                        },
                        {
                            title: "ヘルプ＆サポート",
                            link: "/"
                        },
                        {
                            title: "お問い合わせ",
                            link: "/"
                        }
                    ],
                }
            ]
        },
        {
            title: "地肌と髪ラボ",
            subnav: [
                {
                    title: "地肌（頭皮）トラブルと対策",
                    fields: [
                        {
                            title: "h&s",
                            link: "/"
                        },
                        {
                            title: "コントロールシリーフケをケアしたい！",
                            link: "/"
                        },
                        {
                            title: "地肌のかゆみをケアしたい！",
                            link: "/"
                        },
                        {
                            title: "薄毛のためにできること",
                            link: "/"
                        }
                    ],
                },
                {
                    title: "知っておきたい地肌（頭皮）のこと",
                    fields: [
                        {
                            title: "ボリューム地肌トラブルはどうして起こる？",
                            link: "/"
                        },
                        {
                            title: "いくつも重なる地肌トラブルの原因は？",
                            link: "/"
                        },
                        {
                            title: "地肌トラブルがぶり返すワケは？",
                            link: "/"
                        },
                        {
                            title: "地肌ケアは髪のためにも大切",
                            link: "/"
                        },
                        {
                            title: "地肌ケアシャンプーよくあるご質問",
                            link: "/"
                        }
                    ],
                }
            ]
        },
        {
             title: "ソーシャル",
             social: [
                    {
                        title: "Facebook",
                        image: "static/img/icons/icon-social-facebook.svg",
                        description: "Facebook",
                        link: "/"
                    },
                    {
                        title: "Instagram",
                        image: "static/img/icons/icon-social-instagram.svg",
                        description: "Instagram",
                        link: "/"
                    },
                    {
                        title: "Twitter",
                        image: "static/img/icons/icon-social-twitter.svg",
                        description: "Twitter",
                        link: "/"
                    }
                ],
        }
    ];

    if(data === null)
            return default_value;

    if(data === 'home' && section === 'footer')
            return footer_content;


    return resetBase64Image;
}
