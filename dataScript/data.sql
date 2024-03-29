USE [LearnVocab]
GO
/****** Object:  Table [dbo].[Topics]    Script Date: 8/9/2019 8:32:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Topics](
	[id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Description] [nvarchar](max) NULL,
	[Type] [nvarchar](max) NULL,
	[Pronunciation] [nvarchar](max) NULL,
	[Example] [nvarchar](max) NULL,
 CONSTRAINT [PK_Topics] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'00276f57-0847-4cdb-89b5-94dbc95c09d9', N'dissolve', N'giải thể', N'verb', N'/dɪˈzɒlv/ ', N'glucose dissolves easily in water')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'04012f41-0ef4-4966-a0f9-7990ceb2768f', N'metaphorically', N'một cách ẩn dụ, theo nghĩa bóng', N'adv', N'/ˌmɛtəˈfɒrɪk(ə)li/ ', N'he seems literally and metaphorically lost')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'06511557-9ecc-4de6-b3de-057161c8746f', N'subjective', N'chủ quan', N'adj', N'/səbˈdʒɛktɪv/', N'his views are highly subjective')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'0ba0193f-ed47-4427-b896-d906f628bfbf', N'disguise', N'che đậy, ngụy trang', N'verb', N'/dɪsˈɡʌɪz/ ', N'brian was disguised as a priest')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'0cdf4e2d-58c4-437b-9240-3576f49e881f', N'criticism', N'sự chỉ trích, phê bình', N'N (countable)', N'/ˈkrɪtɪsɪz(ə)m/', N'he ignored the criticisms of his friends')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'0f876935-330d-46c9-8dff-c98cd5964b15', N'pressing issue', N'vẫn đề cấp bách', N'phrase', N'none', N'getting band 8 of ielts exam is sort of my pressing issues now :)')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'13bac0dd-9c7c-42a8-ae31-4eb854ebb5d0', N'presentable', N'đoan trang, đẹp đẽ, clean, well dressed, or decent enough to be seen in public.', N'adj', N'/prɪˈzɛntəb(ə)l/', N'i did my best to make myself look presentable')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'206f2af7-3dad-4399-827a-44d95bcda4c8', N'introspection', N'nội tâm', N'N', N'/ɪntrə(ʊ)ˈspɛkʃ(ə)n/', N'quiet introspection can be extremely valuable')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'37639aaf-80eb-428a-a319-eebd715a5f82', N'convict', N'kết án, người bị kết án', N'verb, noun', N'/kənˈvɪkt/', N'the theives were convicted of the robbery')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'42262d64-701a-4a44-b19c-a0efca809571', N'substitute', N'thay thế, ngươi/ vật thay thế', N'n, verb', N'/ˈsʌbstɪtjuːt/', N'i found someone to substitute for me ')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'449a96fd-90ac-4cd6-9460-8bdccbe4c81d', N'auditory', N'thính giác', N'adj', N'/ˈɔːdɪt(ə)ri/', N'auditory nerves')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'44dc0da1-4a67-44ab-b170-bb1782f6a8be', N'deteriorate', N'làm xấu đi, tệ đi, giảm giá trị', N'verb', N'/dɪˈtɪərɪəreɪt/ ', N'relations between countries had deteriorated sharply')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'47102c83-a9ae-4cce-96b9-698b7af47254', N'procrastinate', N'hoãn lại, trì hoãn (postpone)', N'verb', N'/prə(ʊ)ˈkrastɪneɪt/', N'the temptation will be to procrastinate until the power struggle plays itself out.')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'4adefe98-5af2-4775-bf3e-0e464deeb18e', N'glorious', N'vẽ vang, vinh quang, danh dự', N'adj', N'/ˈɡlɔːrɪəs/ ', N'the most glorious victory of all time')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'6655d9a7-ead1-49c6-9cd3-2b191d522e11', N'deceive', N'lừa gạt', N'verb', N'/dɪˈsiːv/', N'i didn''t intent to deceive peple into thinking that was the French champagne')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'66fd80c3-e800-4f54-ad7c-bd7d42a30c79', N'intimate', N'thân mật, bạn thân', N'verb, noun, adj', N'/ˈɪntɪmeɪt/ ', N'intimate friends')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'72619173-b151-439f-8a7a-f21d7b46ced7', N'debilitate', N'làm suy yếu, suy nhược', N'verb', N'/dɪˈbɪlɪteɪt/', N'he was severely debilitated by a stomach upset')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'7490dc80-7a2c-4e35-929e-b1f07176b7bc', N'cliche', N'sáo rỗng', N'N', N'/ˈkliːʃeɪ/', N'none')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'75bb433d-be4e-4110-85e1-b19813c5b732', N'panacea', N'tiên dược, thuốc chữa bách bệnh', N'n', N'/ˌpanəˈsiːə/', N'the panacea for all corporate ills')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'75ecff2d-b63c-468f-82b7-a2cbf3fdcc44', N'ordinary', N'thông thường, bình thường, usual', N'adj, n', N'/ˈɔːdɪn(ə)ri/', N'nothing out of the ordinary happened')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'7ffcb3ae-6219-444c-8943-2d16b8ae7412', N'commission', N'ủy quyền, giấy ủy quyền', N'n (countable), verb', N'/kəˈmɪʃ(ə)n/', N'one of his first commissions was to redesign the building')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'811673fb-ea43-4232-a074-a7dba8a1a37d', N'enchant', N'bỏ bùa, mê hoặc', N'verb', N'/ɪnˈtʃɑːnt/ ', N'the senery began to enchant her')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'8170ee22-469c-49ba-a33e-6788bc239dff', N'misfortune', N'sự bất hạnh', N'N (countable)', N'/mɪsˈfɔːtʃuːn/', N'never laugh at other people''s misfortunes')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'84734005-a26f-4f94-8e82-887795daed60', N'subtle', N'tinh tế', N'adj', N'/ˈsʌt(ə)l/', N'his language expresses rich and sublte meanings')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'89e98429-756f-4ddb-87f6-decde28246c1', N'temptation', N'sự cám dỗ', N'n', N'/tɛm(p)ˈteɪʃ(ə)n/', N'he resisted the temptation to call her at the office')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'92bb5676-4859-49bb-926c-df69e4d0c090', N'millennial', N'giới trẽ', N'N (countable)', N'/mɪˈlɛnɪəl/', N'none')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'93034543-6677-4a30-9fff-fdf9b1bc207f', N'obesity', N'béo phì', N'n', N'/ə(ʊ)ˈbiːsɪti/', N'the problem of obesity among children')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'99f73303-d440-4ac7-8890-966fd90d0ea7', N'texture', N'kết cấu', N'verb, noun', N'/ˈtɛkstʃə/', N'the cheese is firm in texture')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'a6c7cbdc-6c87-45cf-872d-a98564f4494d', N'compromise', N'sự thõa hiệp', N'n', N'/ˈkɒmprəmʌɪz/', N'evnetually they reached a compromise')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'a7ae9169-b3aa-4175-b603-1b5da8a14586', N'envy', N'đối kỵ, ghen tỵ', N'n, verb', N'/ˈɛnvi/ ', N'a lifestyle which most of us would envy')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'aa7a481d-3a30-49bd-ac1a-1710baeae8e7', N'frustrate', N'bực bội, hỏng, thất bại', N'verb', N'/frʌˈstreɪt/', N'the rescue attempt was frustrated by bad weather')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'c2b77dd8-d66c-4fca-9d68-0fe9eb425b65', N'sympathy', N'lòng trắc ẩn, sự cảm thông', N'N', N'/ˈsɪmpəθi/ ', N'they had great sympathy for the flood victims')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'c41f0566-4e11-4c82-9db3-84046ed9f17a', N'commiserate', N'động lòng, thương xớt', N'verb', N'/kəˈmɪzəreɪt/ ', N'she went over to commiserate with Rose on her unfortunate circumstances')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'c4cda9f7-58df-483a-b66e-89680c80fd32', N'come to terms with sth', N'đi đến thõa thuận với, chấp nhận với', N'phrase', N'none', N'come to terms with the difficulties they may be having')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'c7fbe0d0-4896-469c-a942-ba1c8981dce1', N'advocate', N'người ủng hộ, ủng hộ, binh vực', N'verb, noun', N'/ˈadvəkət/', N'he was an untiring advocate of econimic reform')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'cc7b6d41-98c3-4a26-8b66-99d08bd17a5e', N'gastronome', N' người sành ăn', N'N (countable)', N'/ˈɡastrənəʊm/', N'he''s like a gastronome')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'd7a45c7c-d261-44f8-abbe-c3330a757bbd', N'complacent', N'tự mãn', N'adj', N'/kəmˈpleɪs(ə)nt/', N'trying different things keeps you alive and stop you being complacent')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'db4d3461-3534-48cf-9de5-f77c07308fc5', N'proportion', N'tỷ lệ, phần', N'N', N'/prəˈpɔːʃ(ə)n/', N'the proportion of greenhouse gases in the atmosphere is rising')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'dd82227a-c9ef-497b-bdf8-f44996a1deea', N'hypocrite', N'đạo đức giả', N'N (countable)', N'/ˈhɪpəkrɪt/', N'the story tells of respectable Ben who turn out to be a cheat and hypocrite')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'e4ef5c71-7483-4a83-972f-f1515a46bfda', N'insist', N'khăng khăng', N'verb', N'/ɪnˈsɪst/', N'the companies insist that they''re only acitively listening when the keyword is said.')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'ec263006-4fda-4880-971e-53c22cd26d3e', N'circumvent', N'lách qua, phá vỡ(bảo mật)', N'verb', N'/səːkəmˈvɛnt/', N'i found it quite easy to circumvent security')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'f0a8313b-1806-4728-9d4b-7268443cbbcd', N'down in the dumps', N'unhappy ', N'phrase', N'none', N'none')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'f34ab481-3406-47ec-a6f2-97ae2c15f3ce', N'Disposable', N'dùng một lần', N'adj', N'/dɪˈspəʊzəb(ə)l/', N'disposable cups')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'f7012592-c7a3-4278-9876-51718ce4fb27', N'expenditure', N'số tiền xài, chi tiêu', N'N (uncountable)', N'/ɪkˈspɛndɪtʃə/', N'work is the expenditure of energy')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'f95b5550-4cb1-40da-9f94-4c5fb22b2ffa', N'comeuppance', N'nhân quả, a punishment that someone deserves', N'n', N'/kʌmˈʌp(ə)ns/', N'he got his comeuppance in the end')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'fcf740c7-1d77-441a-863c-9c140f702481', N'contradictory', N'mâu thuẫn', N'n, adj', N'/kɒntrəˈdɪkt(ə)ri/', N'the two studies came to contradictory conclutions')
INSERT [dbo].[Topics] ([id], [Name], [Description], [Type], [Pronunciation], [Example]) VALUES (N'ff601272-94ce-48c4-99dc-efeb5735ab33', N'pioneer', N'người tiên phong, tiên phong', N'n, verb', N'/pʌɪəˈnɪə/', N'a famous pioneer of birth control.')
