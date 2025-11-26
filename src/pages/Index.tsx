import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [consumption, setConsumption] = useState<string>("1000");
  const tariff = 10;
  const discount = 0.2;

  const calculateSavings = () => {
    const kWh = parseFloat(consumption) || 0;
    const regularCost = kWh * tariff;
    const discountedCost = regularCost * (1 - discount);
    const savings = regularCost - discountedCost;
    return { regularCost, discountedCost, savings };
  };

  const { regularCost, discountedCost, savings } = calculateSavings();

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold text-primary">Метан Сити</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#equipment" className="text-foreground hover:text-primary transition-colors">Оборудование</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-secondary hover:bg-secondary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <span className="text-sm font-semibold">🚀 Экономия с первого дня</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Энергия для вашего бизнеса без капитальных затрат
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Газопоршневые электростанции в аренду. Снижайте расходы на электричество на 20% с первого дня работы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать выгоду
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 text-white text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">-20%</div>
                  <div className="text-sm text-white/80 mt-1">Тариф</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">90%</div>
                  <div className="text-sm text-white/80 mt-1">КПД</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-white/80 mt-1">Работа</div>
                </div>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl animate-scale-in">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Калькулятор экономии</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Потребление в месяц (кВт·ч)
                    </label>
                    <Input
                      type="number"
                      value={consumption}
                      onChange={(e) => setConsumption(e.target.value)}
                      className="text-lg"
                      placeholder="1000"
                    />
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Текущий тариф МРСК:</span>
                      <span className="font-semibold text-lg">{tariff} ₽/кВт·ч</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Обычная стоимость:</span>
                      <span className="font-semibold text-lg">{regularCost.toLocaleString()} ₽</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Наш тариф (-20%):</span>
                        <span className="font-semibold text-lg text-primary">{(tariff * (1 - discount)).toFixed(1)} ₽/кВт·ч</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-muted-foreground">Стоимость с нами:</span>
                        <span className="font-semibold text-lg text-primary">{discountedCost.toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/10 rounded-lg p-6 border-2 border-secondary/30">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Ваша экономия в месяц</div>
                      <div className="text-4xl font-bold text-secondary">{savings.toLocaleString()} ₽</div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {(savings * 12).toLocaleString()} ₽ в год
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-lg py-6">
                    Получить коммерческое предложение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Почему газопоршневые электростанции?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современное решение для энергетической независимости вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: "Shield",
                title: "Энергетическая независимость",
                description: "Работайте стабильно 24/7 без рисков аварийных и плановых отключений"
              },
              {
                icon: "TrendingUp",
                title: "Высокая эффективность",
                description: "КПД до 90% благодаря когенерации — электричество + бесплатное тепло"
              },
              {
                icon: "Snowflake",
                title: "Надежность в суровых условиях",
                description: "Отличная работа на нефтегазовых месторождениях и промобъектах"
              },
              {
                icon: "Leaf",
                title: "Экологичность",
                description: "Соответствие строгим природоохранным стандартам"
              }
            ].map((advantage, index) => (
              <Card key={index} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <Icon name={advantage.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{advantage.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary to-primary/90 text-white border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold">Уникальное предложение: Аренда с мгновенной экономией</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">0 рублей капитальных вложений</div>
                        <div className="text-white/80">Мы покупаем оборудование за свой счет</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Снижение затрат на 20%</div>
                        <div className="text-white/80">С первого дня работы оборудования</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Полный сервис и сопровождение</div>
                        <div className="text-white/80">Обеспечиваем бесперебойную работу техники</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name="Check" size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">Гибкость и мобильность</div>
                        <div className="text-white/80">Быстрое развертывание там, где нужно вам</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center space-y-4">
                    <div className="text-white/80 text-lg">Формула аренды</div>
                    <div className="text-4xl font-bold">Тариф МРСК</div>
                    <div className="text-6xl font-bold text-secondary">-20%</div>
                    <div className="text-xl text-white/80 pt-4">
                      Прозрачно. Выгодно. С первого дня.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="equipment" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Наше оборудование
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современные высокоэффективные газопоршневые электростанции
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/904eb984-0d14-4ed4-90d6-de198f52575a.png" 
                  alt="Газопоршневая электростанция"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Контейнерные установки</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мобильные газопоршневые электростанции в контейнерном исполнении. Мощность от 600 кВт до 3600 кВт.
                </p>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Zap" size={16} className="text-secondary" />
                    <span>Напряжение: 600 В / 50 Гц</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Gauge" size={16} className="text-secondary" />
                    <span>КПД: до 0,8</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Thermometer" size={16} className="text-secondary" />
                    <span>Когенерация: встроенная</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden flex items-center justify-center">
                <Icon name="Factory" size={120} className="text-primary/20" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Стационарные комплексы</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Стационарные электростанции большой мощности для промышленных объектов и месторождений.
                </p>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Zap" size={16} className="text-secondary" />
                    <span>Мощность: 1200-8400 кВт</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Clock" size={16} className="text-secondary" />
                    <span>Непрерывная работа 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Shield" size={16} className="text-secondary" />
                    <span>Защита: IP54-IP65</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden flex items-center justify-center">
                <Icon name="Cpu" size={120} className="text-primary/20" />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">Системы управления</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Современные системы мониторинга и управления с удаленным доступом и диагностикой.
                </p>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Smartphone" size={16} className="text-secondary" />
                    <span>Удаленный мониторинг</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Activity" size={16} className="text-secondary" />
                    <span>Реальное время работы</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="AlertCircle" size={16} className="text-secondary" />
                    <span>Автоматическая диагностика</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-muted/30 border-0">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">Для кого идеально подходит</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: "Droplet", title: "Нефтегазовые компании", desc: "Бурение, ЭГРП, месторождения" },
                  { icon: "Building2", title: "Промышленность", desc: "Заводы, производства" },
                  { icon: "Wheat", title: "Сельское хозяйство", desc: "Фермы, комплексы" },
                  { icon: "Construction", title: "Строительство", desc: "Крупные площадки" }
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Icon name={item.icon} className="text-primary" size={32} />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-primary">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
              Технические характеристики
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Детальные спецификации газопоршневых электростанций различной мощности
            </p>
          </div>

          <div className="space-y-12">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-12 flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/64073d92-69bf-41da-8102-fe3f2a1724f1.png"
                      alt="Технические характеристики 30-50 кВт"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-primary mb-6">Установки 30-50 кВт</h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      Компактные газопоршневые электростанции для малого и среднего бизнеса. Идеальны для объектов с потреблением до 50 кВт.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">30-50</div>
                        <div className="text-sm text-muted-foreground">кВт мощность</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">600 В</div>
                        <div className="text-sm text-muted-foreground">Напряжение</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">≥76%</div>
                        <div className="text-sm text-muted-foreground">КПД</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">24/7</div>
                        <div className="text-sm text-muted-foreground">Режим работы</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-secondary hover:bg-secondary/90 flex-1">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Купить установку
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать PDF
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="order-2 lg:order-1 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-primary mb-6">Установки 100-250 кВт</h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      Мощные газопоршневые электростанции для крупных промышленных объектов и месторождений. Высокая надежность и эффективность.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">100-250</div>
                        <div className="text-sm text-muted-foreground">кВт мощность</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">230/400</div>
                        <div className="text-sm text-muted-foreground">В напряжение</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">≥80%</div>
                        <div className="text-sm text-muted-foreground">КПД</div>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">IP65</div>
                        <div className="text-sm text-muted-foreground">Защита</div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Button className="bg-secondary hover:bg-secondary/90 flex-1">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Купить установку
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Icon name="Download" size={18} className="mr-2" />
                        Скачать PDF
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 bg-gradient-to-br from-primary/5 to-primary/10 p-8 lg:p-12 flex items-center justify-center">
                    <img 
                      src="https://cdn.poehali.dev/files/3fe45353-c7a3-457b-8061-af56b41eac49.png"
                      alt="Технические характеристики 100-250 кВт"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary/20">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Package" className="text-secondary" size={40} />
                </div>
                <h3 className="text-3xl font-bold text-primary">Готовы купить оборудование?</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Мы предлагаем как аренду с экономией 20%, так и прямую продажу оборудования. Получите индивидуальное коммерческое предложение.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить оборудование
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-2">
                    <Icon name="Calculator" size={20} className="mr-2" />
                    Арендовать со скидкой 20%
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Сделайте шаг к значительной экономии
              </h2>
              <p className="text-xl text-white/90">
                Свяжитесь с нами для расчета точной экономической модели
              </p>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardContent className="p-8 lg:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Ваше имя
                      </label>
                      <Input placeholder="Иван Иванов" className="text-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-muted-foreground mb-2">
                        Телефон
                      </label>
                      <Input placeholder="+7 (999) 123-45-67" className="text-lg" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="email@company.ru" className="text-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Компания
                    </label>
                    <Input placeholder="ООО 'Компания'" className="text-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Комментарий
                    </label>
                    <textarea 
                      className="w-full min-h-[120px] px-3 py-2 text-lg rounded-md border border-input bg-background"
                      placeholder="Расскажите о вашей задаче..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6">
                    <Icon name="Send" size={20} className="mr-2" />
                    Получить коммерческое предложение
                  </Button>
                  <p className="text-sm text-center text-muted-foreground">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={24} />
                </div>
                <span className="text-2xl font-bold">Метан Сити</span>
              </div>
              <p className="text-white/80">
                Ваша энергия. Наша выгода.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Контакты</h4>
              <div className="space-y-2 text-white/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@methancity.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#advantages" className="block text-white/80 hover:text-white transition-colors">Преимущества</a>
                <a href="#equipment" className="block text-white/80 hover:text-white transition-colors">Оборудование</a>
                <a href="#contact" className="block text-white/80 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
            © 2024 Метан Сити. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;